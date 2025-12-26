import { Component, OnDestroy, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../shared/breadcrumb/breadcrumb.component';
import { NotificationsComponent } from '../../../shared/notifications/notifications.component';
import { FeatherModule } from 'angular-feather';
import { SignInService } from '../../../auth/services/sign-in.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
//Flowbite Charts Start
import { initFlowbite } from 'flowbite'
import ApexCharts from 'apexcharts';
//Flowbite Charts End

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NotificationsComponent,
    FeatherModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {

  data!: any;

  private readonly subscriptions: Subscription[] = [];

  breadcrumb: BreadcrumbItem[] = [
  {
    text: "Dashboard",
    isLink: false,
    routerLink: "",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M18.0992 9.41073L16.4305 7.74404L10.59 1.91065C10.4335 1.75442 10.2213 1.66666 10.0001 1.66666C9.77884 1.66666 9.56666 1.75442 9.41019 1.91065L3.56968 7.74404L1.90096 9.41073C1.74898 9.5679 1.66488 9.7784 1.66678 9.9969C1.66868 10.2154 1.75643 10.4244 1.91113 10.5789C2.06582 10.7334 2.27509 10.8211 2.49386 10.823C2.71262 10.8249 2.92338 10.7409 3.08075 10.5891L3.32521 10.3449V16.6666C3.32521 17.1087 3.50102 17.5326 3.81397 17.8452C4.12691 18.1577 4.55136 18.3333 4.99393 18.3333H7.49701C7.71829 18.3333 7.93051 18.2455 8.08699 18.0892C8.24346 17.933 8.33136 17.721 8.33136 17.5V14.1666C8.33136 13.9456 8.41927 13.7336 8.57574 13.5774C8.73222 13.4211 8.94444 13.3333 9.16572 13.3333H10.8344C11.0557 13.3333 11.2679 13.4211 11.4244 13.5774C11.5809 13.7336 11.6688 13.9456 11.6688 14.1666V17.5C11.6688 17.721 11.7567 17.933 11.9132 18.0892C12.0697 18.2455 12.2819 18.3333 12.5032 18.3333H15.0062C15.4488 18.3333 15.8732 18.1577 16.1862 17.8452C16.4991 17.5326 16.675 17.1087 16.675 16.6666V10.3449L16.9194 10.5891C17.0768 10.7409 17.2875 10.8249 17.5063 10.823C17.7251 10.8211 17.9343 10.7334 18.089 10.5789C18.2437 10.4244 18.3315 10.2154 18.3334 9.9969C18.3353 9.7784 18.2512 9.5679 18.0992 9.41073Z" fill="#374151"/>
              </svg>`,
  },
];
  constructor(
    private readonly signInService: SignInService,
    private readonly router: Router,
  ){}

  ngOnInit(){
    initFlowbite();
    this.getApplicationsData()
  }

  getApplicationsData(){
    const decodeToken = this.signInService.getDecodedToken();
    this.data = JSON.parse(decodeToken.applications);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }

  //Config Charts Start
  //--------------------------------
  //Selectors DOM Charts Start
  @ViewChild('areaChart') areaChartRef!: ElementRef;//Selector Area Chart
  @ViewChild('pieChart') pieChartRef!: ElementRef; //Selector Pie Chart
  //Selectors DOM Charts End
  ngAfterViewInit(): void {
    //Options to config Area Chart Start
    const optionsAreaChart = {
      chart: {
        height: 292,
        maxWidth: "100%",
        type: "area",
        fontFamily: "Montserrat, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#046c4e",
          gradientToColors: ["#046c4e"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "Pedidos",
          data: [841, 773, 835, 802, 739, 880, 930],
          color: "#046c4e",
        },
      ],
      xaxis: {
        categories: ['01 Diciembre', '02 Diciembre', '03 Diciembre', '04 Diciembre', '05 Diciembre', '06 Diciembre', '07 Diciembre'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };
    const arenaChart = new ApexCharts(this.areaChartRef.nativeElement, optionsAreaChart);
    //Options to config Area Chart End
    //--------------------------------
    //Options for Pie Chart Start
    const optionsPieChart = {
      series: [52.8, 26.8, 20.4],
      colors: ["#046c4e", "#069D72", "#08D99D"],
      chart: {
        height: 305,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: "100%",
          dataLabels: {
            offset: -25
          }
        },
      },
      labels: ["Menú del día", "Menú vegetariano", "Menú vegano"],
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Montserrat, sans-serif",
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "Montserrat, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value: number) {
            return value + "%";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value: number) {
            return value + "%";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    }
    const pieChart = new ApexCharts(this.pieChartRef.nativeElement, optionsPieChart);
    //Options for Pie Charts End
    //--------------------------------
    //Charts Renders Start
    arenaChart.render();//Render for Arena Chart
    pieChart.render();//Render for Pie Chart
    //Charts Renders End
  }
  //Config Charts End
}
