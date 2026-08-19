import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { LoadingService } from '../../../shared/loading/loading.service';
import { NotificationType } from '../../../shared/notifications/notifications-models/notification-type';
import { NotificationsService } from '../../../shared/notifications/notifications.service';
import { SignInService } from '../../services/sign-in.service';
import { NotificationsComponent } from '../../../shared/notifications/notifications.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { isValidEmail } from '../../../shared/utils/isValidEmail';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-password-recover',
  standalone: true,
  imports: [
    NotificationsComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './password-recover.component.html',
  animations: [
    trigger('auth', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(650, style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition('* => void', [animate(650, style({ opacity: 0 }))]),
    ]),
  ],
})
export class PasswordRecoverComponent implements OnInit {
  public loginForm!: FormGroup;

  public submitted = false;
  public isValidEmail?: boolean;

  constructor(
    private readonly notification: NotificationsService,
    private readonly loadingService: LoadingService,
    private readonly signInService: SignInService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public resetPassword() {
    const email = this.loginForm.controls['email'].value;
    if (
      !this.loginForm.valid &&
      this.loginForm.controls['email'].errors !== null
    ) {
      this.submitted = true;
      return;
    }

    if (!isValidEmail(email)) {
      this.isValidEmail = false;
      return;
    }

    const request = {
      email: email,
    };
    
    this.loadingService.show();
    this.signInService.forgotPassword(request).subscribe({
      next: () => {
        this.notification.showAndClear({
          data: {
            text: 'Verifique su correo electrónico para recuperar el acceso a su cuenta.',
          },
          type: NotificationType.toastSuccess,
        });
        this.loadingService.hide();
      },
      error: (err) => {
        this.notification.showAndClear({
          data: { text: err.error.Message },
          type: NotificationType.toastDanger,
        });
        this.loadingService.hide();
      },
    });
  }
}
