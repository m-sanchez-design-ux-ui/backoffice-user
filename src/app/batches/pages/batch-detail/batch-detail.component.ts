import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from '../../../shared/breadcrumb/breadcrumb.component';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { DatatablesComponent } from '../../../shared/datatables/datatables.component';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-batch-detail',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    DatatablesComponent
  ],
  templateUrl: './batch-detail.component.html',
  styleUrl: './batch-detail.component.css'
})
export class BatchDetailComponent implements OnInit, AfterViewInit {

  breadcrumb: BreadcrumbItem[] = [
    {
      text: "Lotes",
      isLink: false,
      routerLink: "",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18.3333V9.99996M10 9.99996L2.74167 5.83329M10 9.99996L17.2583 5.83329M6.25 3.55829L13.75 7.84996M9.16667 18.1083C9.42003 18.2546 9.70744 18.3316 10 18.3316C10.2926 18.3316 10.58 18.2546 10.8333 18.1083L16.6667 14.775C16.9198 14.6288 17.13 14.4187 17.2763 14.1657C17.4225 13.9126 17.4997 13.6256 17.5 13.3333V6.66663C17.4997 6.37435 17.4225 6.0873 17.2763 5.83426C17.13 5.58122 16.9198 5.37109 16.6667 5.22496L10.8333 1.89163C10.58 1.74535 10.2926 1.66833 10 1.66833C9.70744 1.66833 9.42003 1.74535 9.16667 1.89163L3.33333 5.22496C3.08022 5.37109 2.86998 5.58122 2.72372 5.83426C2.57745 6.0873 2.5003 6.37435 2.5 6.66663V13.3333C2.5003 13.6256 2.57745 13.9126 2.72372 14.1657C2.86998 14.4187 3.08022 14.6288 3.33333 14.775L9.16667 18.1083Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
    },
    {
      text: "Detalle del lote",
      isLink: false,
      routerLink: "",
    }
  ];

  selectedOption: string = '';

  options = [
    { value: '1', label: 'Jese Leos' },
    { value: '2', label: 'Thomas Leans' },
    { value: '3', label: 'Micheal Gough' },
    { value: '4', label: 'Helene Engels ' },
    { value: '5', label: 'Lana Byrd' },
    { value: '6', label: 'Leslie Livingston' },
    { value: '7', label: 'Pedro Pérez' },
    { value: '8', label: 'Facundo Sánchez' },
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
      pedido: 300,
      fecha: '30/12/2024',
      imagen: '',
      empleado: 'Jese Leos',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5000,00',
    },
    {
      pedido: 299,
      fecha: '30/12/2024',
      imagen: '',
      empleado: 'Thomas Leans',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5000,00',
    },
    {
      pedido: 298,
      fecha: '30/12/2024',
      imagen: '',
      empleado: 'Micheal Gough',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5000,00',
    },
    {
      pedido: 297,
      fecha: '30/12/2024',
      imagen: '',
      empleado: 'Helene Engels',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5000,00',
    },
    {
      pedido: 296,
      fecha: '30/12/2024',
      imagen: '',
      empleado: 'Lana Byrd',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5000,00',
    },
    {
      pedido: 295,
      fecha: '30/12/2024',
      imagen: '',
      empleado: 'Leslie Livingston',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5000,00',
    },
    {
      pedido: 294,
      fecha: '30/12/2024',
      imagen: '',
      empleado: 'Pedro Pérez',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5000,00',
    },
    {
      pedido: 293,
      fecha: '30/12/2024',
      imagen: '',
      empleado: 'Facundo Sánchez',
      menus: 1,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      monto: '$5000,00',
    }

  ];

  ngOnInit(): void {
   
      initFlowbite();
      
      this.dtOptions = {
        
      data: this.data,
      order: [[1, 'asc']], // Second column, ascending order
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
        { data: 'pedido', title: 'N° pedido' },
        { data: 'fecha', title: 'Fecha' },
        { data: 'null', 
          title: 'Imagen',
          orderable: false,
          render: function (data, type, row, meta) {
            return `<div class="overflow-hidden size-10 border-2 border-gray-300 bg-gray-100 rounded-lg"><img class="object-cover w-full h-full [image-rendering:auto]" alt="image default Origin" src="images/avatars/BonnieGreen.png"></div>`;
          }
        },
        { data: 'empleado', title: 'Empleado' },
        { data: 'menus', title: 'Menús' },
        { data: 'platos', title: 'Platos' },
        { data: 'guarniciones', title: 'Guarniciones' },
        { data: 'bebidas', title: 'bebidas' },
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
