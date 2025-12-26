import { ChangeDetectorRef, Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Globals, ScreenSize } from '../../globals';
import { ConfigService } from '../../shared/config.service';
import { LoadingService } from '../../shared/loading/loading.service';
import { Router, RouterOutlet } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { initFlowbite } from 'flowbite';
import { SignInService } from '../../auth/services/sign-in.service';
import { Subscription } from 'rxjs';
import { NotificationsComponent } from '../../shared/notifications/notifications.component';
import { NotificationsService } from '../../shared/notifications/notifications.service';
import { NotificationType } from '../../shared/notifications/notifications-models/notification-type';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-authorized',
  standalone: true,
  imports: [
    RouterOutlet,
    FeatherModule,
    NotificationsComponent,
    CommonModule,
    RouterModule // ¡Esto es necesario para que routerLink funcione!
  ],
  templateUrl: './authorized.component.html',
  styleUrl: './authorized.component.css',
})

export class AuthorizedComponent implements OnInit, OnDestroy, AfterViewInit {
  //Notifications length start

  //Case Notifications = 0

  //notifications: any[] = []; // o lo que uses para tus notificaciones

  //Case Notifications > 0
  notifications = [
    { mensaje: 'Se ha generado la notificación número 01. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 02. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 03. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 04. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 05. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 06. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 07. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 08. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 09. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 10. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 11. La tarea fue completada' },
    { mensaje: 'Se ha generado la notificación número 12. La tarea fue completada' },
  ];

  //Function tha delete each notification
  deleteNotification(index: number) {
    this.notifications.splice(index, 1);
  }

  //Notifications length end


  //Styles for Mobile Drawer with tailwind start
  ngAfterViewInit(): void {
    const observer = new MutationObserver(() => {
      const backdrop = document.querySelector('[drawer-backdrop]');
      if (backdrop) {
        backdrop.classList.remove('bg-gray-900/50', 'dark:bg-gray-900/80');
        backdrop.classList.add('bg-black/50', 'backdrop-blur-md'); // Change here the background styles with tailwind classes
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
  //Styles for Mobile Drawer with tailwind end

  
  public roles!: string[] | string;
  public userName!: string;
  public notifLength!: number;
  data!:any;
  private readonly subscriptions: Subscription[] = [];
  buttons: any = [];
  firstName: string = ''
  lastName: string = ''
  includesAmdin: boolean = false;
  
  constructor(
    private readonly loadingService: LoadingService,
    public configService: ConfigService,
    public globals: Globals,
    private readonly signInService: SignInService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
    private readonly notification: NotificationsService,
  ) {}

  ngOnInit() {
    initFlowbite();
    
    this.roles = this.signInService.getRoles();

    if(typeof this.roles !== 'string' ){
      this.roles.forEach((role: string) => {
        if(role.includes('admin')){
          this.includesAmdin = true
        }
      })
    }

    //this.getApplicationsData();

    //this.cdr.detectChanges();
  }


  getApplicationsData(){
    // const decodeToken = this.signInService.getDecodedToken();
    // this.data = JSON.parse(decodeToken.applications);
  }

  public onBtnMenuClick() {
    this.globals.collapseMenu(!this.globals.menuCollapsed);
  }

  public onModuleClick() {
    if (this.globals.screenSize === ScreenSize.Small) {
      this.globals.collapseMenu();
    }
  }

  public onLogout() {
    this.subscriptions.push(
      this.signInService.logout().subscribe(() => {
        localStorage.clear();
        this.router.navigateByUrl('/auth/signin');
      })
    );
  }

  public onGoToProfileSummary() {
    this.router.navigateByUrl('/profile');
  }

  public showLoading($event: any) {
    if ($event === true) {
      this.loadingService.show();
    } else {
      this.loadingService.hide();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
