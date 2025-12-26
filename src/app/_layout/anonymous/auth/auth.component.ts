import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationsComponent } from '../../../shared/notifications/notifications.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    NotificationsComponent
  ],
  templateUrl: './auth.component.html',
})
export class AuthComponent { }
