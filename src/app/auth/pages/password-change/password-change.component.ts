import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router, RouterLink  } from '@angular/router';

import { LoadingService } from '../../../shared/loading/loading.service';
import { NotificationsService } from '../../../shared/notifications/notifications.service';
import { NotificationType } from '../../../shared/notifications/notifications-models/notification-type';
import { SignInService } from '../../services/sign-in.service';
import { MustMatch } from '../../../shared/services/form-validator.service';
import { NotificationsComponent } from '../../../shared/notifications/notifications.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { IResetPasswordRequest } from '../../interfaces/reset-password.interface';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-password-change',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NotificationsComponent,
    FeatherModule,
    RouterLink
  ],
  templateUrl: './password-change.component.html',
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
export class PasswordChangeComponent implements OnInit, OnDestroy {
  public changePasswordForm!: FormGroup;
  private subscription!: Subscription;
  private token!: string;
  private username!: string;
  public submitted = false;
  public typeInputNewPassword = 'password';
  public typeInputChangePassword = 'password';

  constructor(
    private readonly notification: NotificationsService,
    private readonly loadingService: LoadingService,
    private readonly signInService: SignInService,
    private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
      this.username = params['userName'];
    });

    this.changePasswordForm = this.formBuilder.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$'
            ),
          ],
        ],
        passwordRepeat: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$'
            ),
          ],
        ],
      },
      {
        validator: [MustMatch('password', 'passwordRepeat')],
      } as AbstractControlOptions
    );
  }

  public changePassword() {
    this.loadingService.show();
    if (
      !this.changePasswordForm.valid &&
      (this.changePasswordForm.controls['password'].errors !== null ||
        this.changePasswordForm.controls['passwordRepeat'].errors !== null)
    ) {
      this.submitted = true;
      this.loadingService.hide();
      return;
    }

    const request: IResetPasswordRequest = {
      token: this.token,
      userName: this.username,
      password: this.changePasswordForm.controls['password'].value,
      passwordRepeat: this.changePasswordForm.controls['passwordRepeat'].value,
    };
    this.signInService.resetPassword(request).subscribe({
      next: () => {
        this.notification.showAndClear({
          data: { text: 'La contraseña ha sido actualizada con éxito.' },
          type: NotificationType.toastSuccess,
        });
        this.loadingService.hide();
        setTimeout(() => {
          this.router.navigate(['/auth/signin']);
        }, 1000);
      },
      error: (err) => {
        this.loadingService.hide();
        this.notification.showAndClear({
          data: {
            text: err?.error?.Message,
          },
          type: NotificationType.toastWarning,
        });
      },
    });
  }

  showPassword(nameInput: string) {
    if (nameInput === 'password') {
      this.typeInputNewPassword =
        this.typeInputNewPassword === 'password' ? 'text' : 'password';
    } else {
      this.typeInputChangePassword =
        this.typeInputChangePassword === 'password' ? 'text' : 'password';
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
