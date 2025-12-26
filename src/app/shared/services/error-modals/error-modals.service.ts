import { Injectable } from '@angular/core';
import { NotificationsService } from '../../notifications/notifications.service';
import { NotificationType } from '../../notifications/notifications-models/notification-type';

@Injectable({
  providedIn: 'root'
})
export class ErrorModalsService {

  constructor(
    private readonly notificationService: NotificationsService,
  ) { }

  showError(message: string){
    this.notificationService.showAndClear({
      data: { text: message },
      type: NotificationType.alertDanger,
    });
  }
}
