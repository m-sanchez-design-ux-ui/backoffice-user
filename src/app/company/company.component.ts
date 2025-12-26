import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from '../shared/breadcrumb/breadcrumb.component';
import { initFlowbite } from 'flowbite';
import { DatatablesComponent } from '../shared/datatables/datatables.component';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    DatatablesComponent,
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit, AfterViewInit {
  
  breadcrumb: BreadcrumbItem[] = [
    {
      text: "Mi empresa",
      isLink: false,
      routerLink: "",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 7.03947C17.5 6.02658 16.2805 3.62105 15.907 2.90816C15.8422 2.78448 15.747 2.68137 15.6315 2.60958C15.5159 2.53779 15.3842 2.49995 15.25 2.5H4.75C4.61712 2.49994 4.48662 2.53705 4.37184 2.60751C4.25706 2.67798 4.16213 2.77928 4.09675 2.90105C3.7225 3.59974 2.5 5.96184 2.5 7.03947C2.50033 7.38424 2.56694 7.72537 2.69584 8.04231C2.82473 8.35926 3.01324 8.64546 3.25 8.88368V16.7105C3.25 16.9199 3.32902 17.1207 3.46967 17.2688C3.61032 17.4168 3.80109 17.5 4 17.5H5.5C5.69891 17.5 5.88968 17.4168 6.03033 17.2688C6.17098 17.1207 6.25 16.9199 6.25 16.7105V11.9737H9.25V16.7105C9.25 16.9199 9.32902 17.1207 9.46967 17.2688C9.61032 17.4168 9.80109 17.5 10 17.5H16C16.1989 17.5 16.3897 17.4168 16.5303 17.2688C16.671 17.1207 16.75 16.9199 16.75 16.7105V8.85053C16.9828 8.61602 17.1689 8.33515 17.2977 8.02424C17.4264 7.71334 17.4952 7.3786 17.5 7.03947V7.03947ZM5.19325 4.07895H14.8C15.3179 5.00812 15.7211 6.00297 16 7.03947C15.9846 7.29589 15.8809 7.53759 15.7083 7.71926C15.5357 7.90094 15.3061 8.01011 15.0625 8.02632C14.814 8.0259 14.5758 7.92179 14.4 7.73682C14.2243 7.55184 14.1254 7.30107 14.125 7.03947C14.125 6.83009 14.046 6.62929 13.9053 6.48123C13.7647 6.33318 13.5739 6.25 13.375 6.25C13.1761 6.25 12.9853 6.33318 12.8447 6.48123C12.704 6.62929 12.625 6.83009 12.625 7.03947C12.625 7.3012 12.5262 7.55221 12.3504 7.73728C12.1746 7.92235 11.9361 8.02632 11.6875 8.02632C11.4389 8.02632 11.2004 7.92235 11.0246 7.73728C10.8488 7.55221 10.75 7.3012 10.75 7.03947C10.75 6.83009 10.671 6.62929 10.5303 6.48123C10.3897 6.33318 10.1989 6.25 10 6.25C9.80109 6.25 9.61032 6.33318 9.46967 6.48123C9.32902 6.62929 9.25 6.83009 9.25 7.03947C9.25 7.3012 9.15123 7.55221 8.97541 7.73728C8.7996 7.92235 8.56114 8.02632 8.3125 8.02632C8.06386 8.02632 7.8254 7.92235 7.64959 7.73728C7.47377 7.55221 7.375 7.3012 7.375 7.03947C7.375 6.83009 7.29598 6.62929 7.15533 6.48123C7.01468 6.33318 6.82391 6.25 6.625 6.25C6.42609 6.25 6.23532 6.33318 6.09467 6.48123C5.95402 6.62929 5.875 6.83009 5.875 7.03947C5.8746 7.30107 5.7757 7.55184 5.59997 7.73682C5.42425 7.92179 5.18602 8.0259 4.9375 8.02632C4.68983 8.02304 4.45317 7.91802 4.27803 7.73366C4.10288 7.54929 4.00311 7.30018 4 7.03947C4.26569 5.99927 4.66727 5.00291 5.19325 4.07895V4.07895ZM14.125 13.5526C14.125 13.6573 14.0855 13.7577 14.0152 13.8318C13.9448 13.9058 13.8495 13.9474 13.75 13.9474H11.5C11.4005 13.9474 11.3052 13.9058 11.2348 13.8318C11.1645 13.7577 11.125 13.6573 11.125 13.5526V11.1842C11.125 11.0795 11.1645 10.9791 11.2348 10.9051C11.3052 10.8311 11.4005 10.7895 11.5 10.7895H13.75C13.8495 10.7895 13.9448 10.8311 14.0152 10.9051C14.0855 10.9791 14.125 11.0795 14.125 11.1842V13.5526Z" fill="#374151"/>
                </svg>`,
    },
  ];

  ngAfterViewInit() {
  
  }

//Datatable Start
  dtOptions: Config = {};
  
  titlesList: string[] = ['',]; //Here are the table titles when connected

  data: any[] = [
    { nombre: 'IAE Business School', sucursal: 'Bs As (Sede Central)', cuit: '30-12345678-1', direccion: 'Av. Libertador 1000, CABA, Buenos Aires.', subvencion: '100%'},
    { nombre: 'IAE Business School', sucursal: 'Pilar', cuit: '30-87654321-9', direccion: 'Ruta Panamericana Km 50, Pilar, Buenos Aires.', subvencion: '100%'},
    { nombre: 'IAE Business School', sucursal: 'Rosario', cuit: '30-23456789-2', direccion: 'Calle Córdoba 1234, Rosario, Santa Fe.', subvencion: '100%'},
  ];

  ngOnInit(): void {
   
      initFlowbite();
      
      this.dtOptions = {
        
      data: this.data,
      order: [[1, 'asc']], // Second column, ascending order
      columns: [
        { data: 'null', 
          title: 'Imagen',
          orderable: false,
          render: function (data, type, row, meta) {
            return `<div class="overflow-hidden size-10 border-2 border-gray-300 bg-gray-100 rounded-lg"><img class="object-cover w-full h-full [image-rendering:auto]" alt="image default Origin" src="images/clients/iae-business-school-cover.png"></div>`;
          }
        },
        { data: 'nombre', title: 'Nombre' },
        { data: 'sucursal', title: 'Sucursal' },
        { data: 'cuit', title: 'CUIT' },
        { data: 'direccion', title: 'Dirección' },
        { data: 'subvencion', title: 'Subvención' },

      ],
      drawCallback: () => {
        initFlowbite();       // Restart Flowbite tooltips and components if you use any
      },
    };
  }

  onSelectAll(event: boolean) {
    console.log('Function onSelectAll:', event);
  }
  //Datatable End
}
