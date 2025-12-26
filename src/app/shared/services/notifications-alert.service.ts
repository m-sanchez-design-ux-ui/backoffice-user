import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { NotificationAlert} from '../../interfaces/notification.interface';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsAlertService {

  private readonly okToRefresh = new Subject<any>();
  refreshNotifLength = this.okToRefresh.asObservable();
  private readonly subscriptions: Subscription[] = [];

  private readonly statusSubject = new BehaviorSubject<NotificationAlert[]>([]);
  status = this.statusSubject.asObservable();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly configService: ConfigService,
  ) {}

  getNotifications(){
    this.getNotification();
  }

  getNotification(){
    this.subscriptions.push(
      this.httpClient.get(
        `example-data/mock-notification.json`
      ).subscribe(
        {
          next: (data: any) => {
            this.statusSubject.next(data.notifications);
          },
          error: (err: any) => {console.log(err)},
          complete: () => {}
        }
      )
    )
  }

  public emitRefreshNotif(data: number) {
    this.okToRefresh.next(data);
  }

  private closeNotification(data: any){
    this.subscriptions.push(
      this.httpClient.patch(
        `${this.configService.getProperty(
          'apiUrl'
        )}`,
        data
      ).subscribe(
        {
          next: (data: any) => {},
          error: (err: any) => {console.log(err)},
          complete: () => {}
        }
      )
    )
  }

  deleteAllNotifications( notifications: NotificationAlert[]){
    const notificationId: any[] = [];
    notifications.forEach((notification: NotificationAlert) => {
      notificationId.push(
        {
          notificationId: notification.id
        }
      )
    })
    /* const data = {
      notifications: notificationId
    }
    this.closeNotification(data); */
    return [];
  }

  deleteNotification(notificationId: string, notifications: NotificationAlert[]): NotificationAlert[] {
    /* const data = {
      notifications: [
        {
          notificationId: notificationId
        }
      ]
    }
    this.closeNotification(data); */
    return notifications.filter((notification: NotificationAlert) => notification.id !== notificationId);
  }

  unsubscribeNotifications() {
    this.subscriptions.forEach(sub => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}