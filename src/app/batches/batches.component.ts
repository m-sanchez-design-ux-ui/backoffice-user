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
  selector: 'app-batches',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    DatatablesComponent,
  ],
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent implements OnInit, AfterViewInit {

  breadcrumb: BreadcrumbItem[] = [
    {
      text: "Lotes",
      isLink: false,
      routerLink: "",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 18.3333V9.99996M10 9.99996L2.74167 5.83329M10 9.99996L17.2583 5.83329M6.25 3.55829L13.75 7.84996M9.16667 18.1083C9.42003 18.2546 9.70744 18.3316 10 18.3316C10.2926 18.3316 10.58 18.2546 10.8333 18.1083L16.6667 14.775C16.9198 14.6288 17.13 14.4187 17.2763 14.1657C17.4225 13.9126 17.4997 13.6256 17.5 13.3333V6.66663C17.4997 6.37435 17.4225 6.0873 17.2763 5.83426C17.13 5.58122 16.9198 5.37109 16.6667 5.22496L10.8333 1.89163C10.58 1.74535 10.2926 1.66833 10 1.66833C9.70744 1.66833 9.42003 1.74535 9.16667 1.89163L3.33333 5.22496C3.08022 5.37109 2.86998 5.58122 2.72372 5.83426C2.57745 6.0873 2.5003 6.37435 2.5 6.66663V13.3333C2.5003 13.6256 2.57745 13.9126 2.72372 14.1657C2.86998 14.4187 3.08022 14.6288 3.33333 14.775L9.16667 18.1083Z" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
    },
  ];

  selectedOption: string = '';

  options = [
    { value: '1', label: 'Bs As' },
    { value: '2', label: 'Pilar' },
    { value: '2', label: 'Rosario' },
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
      lote: '0010',
      nombre: 'Lote Bs. As.',
      sucursal: 'Bs. As.',
      fecha: '30/12/2024',
      menus: 2900,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      postres: 0,
      monto: '$14.500.000',
    },
    {
      lote: '0009',
      nombre: 'Lote Pilar',
      sucursal: 'Pilar',
      fecha: '30/12/2024',
      menus: 1740,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      postres: 0,
      monto: '$8.700.000',
    },
    {
      lote: '0008',
      nombre: 'Lote Rosario',
      sucursal: 'Rosario',
      fecha: '30/12/2024',
      menus: 1160,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      postres: 0,
      monto: '$5.800.000',
    },
    {
      lote: '0007',
      nombre: 'Lote Bs. As.',
      sucursal: 'Bs. As.',
      fecha: '30/11/2024',
      menus: 2900,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      postres: 0,
      monto: '$14.500.000',
    },
    {
      lote: '0006',
      nombre: 'Lote Pilar',
      sucursal: 'Pilar',
      fecha: '30/11/2024',
      menus: 1740,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      postres: 0,
      monto: '$8.700.000',
    },
    {
      lote: '0005',
      nombre: 'Lote Rosario',
      sucursal: 'Rosario',
      fecha: '30/11/2024',
      menus: 1160,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      postres: 0,
      monto: '$5.800.000',
    },
    {
      lote: '0004',
      nombre: 'Lote Bs. As.',
      sucursal: 'Bs. As.',
      fecha: '30/10/2024',
      menus: 2900,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      postres: 0,
      monto: '$14.500.000',
    },
    {
      lote: '0003',
      nombre: 'Lote Pilar',
      sucursal: 'Pilar',
      fecha: '30/10/2024',
      menus: 1740,
      platos: 0,
      guarniciones: 0,
      bebidas: 0,
      postres: 0,
      monto: '$8.700.000',
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
         { data: 'lote', title: 'N° lote' },
         { data: 'nombre', title: 'Nombre lote' },
         { data: 'sucursal', title: 'Sucursal' },
         { data: 'fecha', title: 'Fecha' },
         { data: 'menus', title: 'Menús' },
         { data: 'platos', title: 'Platos' },
         { data: 'guarniciones', title: 'Guarniciones' },
         { data: 'bebidas', title: 'Bebidas' },
         { data: 'postres', title: 'Postres' },
         { data: 'monto', title: 'Monto' },
    
         {
           title: 'Acciones',
           orderable: false,
           data: null,
           render: function (data, type, row, meta) {
             return `
             <div class="bg-transparent flex gap-4">
 
               <button onclick="window.location.href='/batches/bacth-detail'" data-tooltip-target="tooltip-view-detail-${meta.row}" class="group flex justify-center items-center size-8 bg-transparent bg-opacity-100 hover:bg-primary hover:bg-opacity-20 rounded-lg">
                 <span class="relative size-6">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 fill-none">
                     <path class="fill-gray-700 group-hover:fill-primary" d="M12 16C11.2089 16 10.4355 15.7654 9.77772 15.3259C9.11992 14.8864 8.60723 14.2616 8.30448 13.5307C8.00173 12.7998 7.92252 11.9956 8.07686 11.2196C8.2312 10.4437 8.61216 9.73098 9.17157 9.17157C9.73098 8.61216 10.4437 8.2312 11.2196 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2616 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 10C11.6044 10 11.2178 10.1173 10.8889 10.3371C10.56 10.5568 10.3036 10.8692 10.1522 11.2346C10.0009 11.6001 9.96126 12.0022 10.0384 12.3902C10.1156 12.7781 10.3061 13.1345 10.5858 13.4142C10.8655 13.6939 11.2219 13.8844 11.6098 13.9616C11.9978 14.0387 12.3999 13.9991 12.7654 13.8478C13.1308 13.6964 13.4432 13.44 13.6629 13.1111C13.8827 12.7822 14 12.3956 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10Z"/>
                     <path class="fill-gray-700 group-hover:fill-primary" d="M12 19C5.546 19 2 13.742 2 12C2 10.336 6.612 5 12 5C17.388 5 22 10.336 22 12C22 13.742 18.454 19 12 19ZM4.013 12.028C4.72447 13.5376 5.85657 14.8098 7.27335 15.6917C8.69013 16.5737 10.3314 17.028 12 17C13.6686 17.028 15.3099 16.5737 16.7267 15.6917C18.1434 14.8098 19.2755 13.5376 19.987 12.028C19.624 11.058 16.255 7 12 7C7.745 7 4.376 11.058 4.013 12.028Z"/>
                   </svg>
                 </span>              
               </button>
 
               <div id="tooltip-view-detail-${meta.row}" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip">
                   Ver detalle
                   <div class="tooltip-arrow" data-popper-arrow></div>
               </div>

             </div>
           `;
           }
         },
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
