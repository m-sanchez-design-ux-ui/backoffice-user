import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoadingService } from '../../../shared/loading/loading.service';
import { NotificationType } from '../../../shared/notifications/notifications-models/notification-type';
import { NotificationsService } from '../../../shared/notifications/notifications.service';
import { LoginRequest } from './models/login-request.model';
import { SignInService } from '../../services/sign-in.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha-2';
import { FeatherModule } from 'angular-feather';
import { ApplicationLoginData } from '../../interfaces/application-login-data.interface';
import { MessageData } from '../../../shared/models/message-data.model';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule,
    RouterLink,
    FeatherModule,
  ],
  templateUrl: './sign-in.component.html',
  animations: [
    trigger('auth', [
      transition ('void => *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(650, style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition ('* => void', [
        animate(650, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SignInComponent implements OnInit {
  @ViewChild(RecaptchaComponent) recaptchaComponent!: RecaptchaComponent;
  public loginForm!: FormGroup;
  private captchaResponse!: string | null;
  public submitted = false;
  public loginError = false;
  navigateTo: string = "";
  typeInputPassword = "password";

  //received application data
  private appLoginData: ApplicationLoginData = {
    clientId: null,
    companyId: null,
    loginRedirectUrl: null,
  };

  constructor(
    private readonly notification: NotificationsService,
    private readonly loadingService: LoadingService,
    private readonly router: Router,
    private readonly signInService: SignInService,
  ) { }

  ngOnInit() {
    this.appLoginData.companyId = this.signInService.getOriginCompanyId();
    this.getClientApplicationData();

    this.navigateTo = this.appLoginData?.loginRedirectUrl ?? localStorage.getItem("path") ?? "/dashboard";
    this.loadingService.hide();
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      captcha: new FormControl('', Validators.required)
    });
  }

  public onSubmit() {
    if (!this.loginForm.valid || this.loginForm.controls['captcha'].errors !== null) {
      this.submitted = true;
      return;
    }

    this.loadingService.show();
    const request : LoginRequest = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
      gRecaptchaResponse: this.captchaResponse,
      clientId : this.appLoginData?.clientId ?? null,
      loginRedirectUrl : this.appLoginData?.loginRedirectUrl ?? null,
      companyId: this.appLoginData?.companyId ?? null,
    };

    this.signInService.login(request).subscribe({
      next: (response) => {
        this.loadingService.hide();
        if(request.clientId && request.loginRedirectUrl){
          this.redirectToApplication(response.accessToken, response.refreshToken, request.loginRedirectUrl);
        }else{
          localStorage.setItem(SignInService.TOKEN, response.accessToken);
          localStorage.setItem(SignInService.REFRESHTOKEN, response.refreshToken);
          this.router.navigate([this.navigateTo]);
        }
      },
      error: (err) => {
        this.loadingService.hide();
        this.recaptchaComponent.reset();
          this.notification.showAndClear({
            data: { text: err?.error?.Message },
            type: NotificationType.toastDanger
          });
          this.loginError = true;
      },
      complete: () => {}
    });
  }

  showPassword(){
    this.typeInputPassword = this.typeInputPassword === "password" ? "text" : "password"
  }

  public resolved(captchaResponse: string | null) {
    this.captchaResponse = captchaResponse;
  }

  private getClientApplicationData() {
    const urlParams = new URLSearchParams(window.location.search);
    const allowedOrigin = urlParams.get("allowedOrigin");

    window.addEventListener('message', (event) => {
      if (allowedOrigin && event.origin !== allowedOrigin)
        return;

      const data = event.data as MessageData;
      if(data.type === 'APP_INFO'){
        this.appLoginData = data.payload as ApplicationLoginData;
      }
    });
  }

  private redirectToApplication(accessToken : string, refreshToken : string, backofficeRedirectUrl : string) {
    const params = new URLSearchParams({ token: accessToken, refreshToken: refreshToken }).toString();
    window.open(`${backofficeRedirectUrl}?${params}`, '_self');
  }
}
