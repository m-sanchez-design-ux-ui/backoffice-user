import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from '../shared/breadcrumb/breadcrumb.component';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { DatatablesComponent } from '../shared/datatables/datatables.component';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-consumption-reports',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    DatatablesComponent
  ],
  templateUrl: './consumption-reports.component.html',
  styleUrl: './consumption-reports.component.css'
})
export class ConsumptionReportsComponent implements OnInit, AfterViewInit {

  breadcrumb: BreadcrumbItem[] = [
    {
      text: "Reportes de consumo",
      isLink: false,
      routerLink: "",
      iconSvg: ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 14.9997H4.16667V4.16634C4.16667 3.70634 3.79333 3.33301 3.33333 3.33301C2.87333 3.33301 2.5 3.70634 2.5 4.16634V15.833C2.5 16.293 2.87333 16.6663 3.33333 16.6663H16.6667C17.1267 16.6663 17.5 16.293 17.5 15.833C17.5 15.373 17.1267 14.9997 16.6667 14.9997Z" fill="#374151"/>
                  <path d="M5.8325 12.4997C6.08583 12.4997 6.33583 12.3847 6.5 12.1663L8.42417 9.60134L11.0783 12.2555C11.4042 12.5813 11.9308 12.5813 12.2567 12.2555L15 9.51134V10.1722C15 10.6322 15.3733 11.0055 15.8333 11.0055C16.2933 11.0055 16.6667 10.6322 16.6667 10.1722V7.49967C16.6667 7.39134 16.6442 7.28301 16.6025 7.18134C16.5183 6.97801 16.3558 6.81551 16.1517 6.73051C16.05 6.68884 15.9417 6.66634 15.8333 6.66634H13.1608C12.7008 6.66634 12.3275 7.03967 12.3275 7.49967C12.3275 7.95967 12.7008 8.33301 13.1608 8.33301H13.8217L11.6667 10.488L8.9225 7.74384C8.75167 7.57217 8.51333 7.48467 8.27417 7.50134C8.03333 7.51884 7.81167 7.63967 7.66667 7.83301L5.16667 11.1663C4.89 11.5347 4.965 12.0572 5.33333 12.333C5.48333 12.4455 5.65917 12.4997 5.8325 12.4997Z" fill="#374151"/>
                </svg>`,
    },
  ];

  selectedOption: string = '';

  options = [
    { value: '1', label: 'Bs. As.' },
    { value: '2', label: 'Pilar' },
    { value: '3', label: 'Rosario' },
  ];

  selectedOption02: string = '';

  options02 = [
    { value: '1', label: 'Lote Pilar' },
    { value: '2', label: 'Lote Rosario' },
  ];

  ngAfterViewInit() {

    flatpickr("#datepicker-range-start", {
    locale: Spanish,
    dateFormat: "d/m/Y", 
    // maxDate: "today", // Do not allow future dates to be selected (optional)
    });
    
    flatpickr("#datepicker-range-end", {
    locale: Spanish,
    dateFormat: "d/m/Y",
    // maxDate: "today",
    });

  }

 //Datatable Start
  dtOptions: Config = {};
  
  titlesList: string[] = ['',]; //Here are the table titles when connected

  data: any[] = [
    {
      empleado: 'Jese Leos',
      sucursal: 'Bs. As.',
      fecha: '30/12/2024',
      pedido: '0001',
      lote: 'N/A',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5.000,00'
    },
    {
      empleado: 'Thomas Leans',
      sucursal: 'Bs. As.',
      fecha: '30/12/2024',
      pedido: '0002',
      lote: 'N/A',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5.000,00'
    },
    {
      empleado: 'Micheal Gough',
      sucursal: 'Bs. As.',
      fecha: '30/12/2024',
      pedido: '0003',
      lote: 'N/A',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5.000,00'
    },
    {
      empleado: 'Helene Engels',
      sucursal: 'Pilar',
      fecha: '30/12/2024',
      pedido: '0004',
      lote: 'Lote Pilar...',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5.000,00'
    },
    {
      empleado: 'Lana Byrd',
      sucursal: 'Pilar',
      fecha: '30/12/2024',
      pedido: '0005',
      lote: 'Lote Pilar...',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5.000,00'
    },
    {
      empleado: 'Leslie Livingston',
      sucursal: 'Pilar',
      fecha: '30/12/2024',
      pedido: '0006',
      lote: 'Lote Pilar...',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5.000,00'
    },
    {
      empleado: 'Pedro Pérez',
      sucursal: 'Rosario',
      fecha: '30/12/2024',
      pedido: '0007',
      lote: 'Lote Rosario...',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5.000,00'
    },
    {
      empleado: 'Facundo Sánchez',
      sucursal: 'Rosario',
      fecha: '30/12/2024',
      pedido: '0008',
      lote: 'Lote Rosario...',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5.000,00'
    }
  
  ];

  ngOnInit(): void {
   
      initFlowbite();
      
      this.dtOptions = {
        
      data: this.data,
      order: [[2, 'asc']], // Third column, ascending order
      columns: [
        {
          data: null,
          orderable: false,
          width: '65px',
          render: function (data, type, row, meta) {
            return `
              <div class="flex justify-center items-center">
                  <input id="row-checkbox-${meta.row}" type="checkbox" value="" class="row-checkbox w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm focus:ring-primary focus:ring-2">
                  <label for="row-checkbox-${meta.row}" class="sr-only ms-2 text-sm font-medium text-gray-900">Checkbox</label>
              </div>
            `;
          }
        },
        { data: 'null', 
          title: 'Imagen',
          orderable: false,
          render: function (data, type, row, meta) {
            return `<div class="overflow-hidden size-10 border-2 border-gray-300 bg-gray-100 rounded-lg"><img class="object-cover w-full h-full [image-rendering:auto]" alt="image default Origin" src="images/avatars/JeseLeos.png"></div>`;
          }
        },
        { data: 'empleado', title: 'Empleado' },
        { data: 'sucursal', title: 'Sucursal' },
        { data: 'fecha', title: 'Fecha' }, 
        { data: 'pedido', title: 'N° pedido' }, 
        { data: 'lote', title: 'Lote asociado' }, 
        { data: 'menus', title: 'Menús' }, 
        { data: 'guarniciones', title: 'Guarniciones' }, 
        { data: 'bebidas', title: 'Bebidas' }, 
        { data: 'monto', title: 'Monto' }, 
   
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
