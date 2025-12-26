import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbItem } from '../shared/breadcrumb/breadcrumb.component';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js";
import { DatatablesComponent } from '../shared/datatables/datatables.component';
import { Config } from 'datatables.net';
import { ImportFileModalComponent } from './modals/import-file-modal/import-file-modal.component';
import { EmployeesDeleteModalComponent } from './modals/employees-delete-modal/employees-delete-modal.component';
import { AddEmployeesDrawerComponent } from './drawers/add-employees-drawer/add-employees-drawer.component';
import { EditEmployeesDrawerComponent } from './drawers/edit-employees-drawer/edit-employees-drawer.component';

@Component({
  selector: 'app-employees-componet',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CommonModule,
    FormsModule,
    DatatablesComponent,
    ImportFileModalComponent,
    EmployeesDeleteModalComponent,
    AddEmployeesDrawerComponent,
    EditEmployeesDrawerComponent
  ],
  templateUrl: './employees-componet.component.html',
  styleUrl: './employees-componet.component.css'
})
export class EmployeesComponetComponent implements OnInit, AfterViewInit {
  
  breadcrumb: BreadcrumbItem[] = [
    {
      text: "Empleados",
      isLink: false,
      routerLink: "",
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10.0001 10.4385C11.3808 10.4385 12.5001 9.26027 12.5001 7.80689C12.5001 6.35351 11.3808 5.17532 10.0001 5.17532C8.61937 5.17532 7.50008 6.35351 7.50008 7.80689C7.50008 9.26027 8.61937 10.4385 10.0001 10.4385Z" fill="#374151"/>
                  <path d="M9.16675 13.07H10.8334C11.7175 13.07 12.5653 13.4397 13.1904 14.0977C13.8156 14.7557 14.1667 15.6482 14.1667 16.5788V18.3332H5.83341V16.5788C5.83341 15.6482 6.1846 14.7557 6.80972 14.0977C7.43485 13.4397 8.28269 13.07 9.16675 13.07Z" fill="#374151"/>
                  <path d="M12.5001 7.80689C12.4995 7.18671 12.2904 6.58676 11.9098 6.1133C11.5293 5.63984 11.0018 5.32341 10.4209 5.22005" fill="#374151"/>
                  <path d="M13.7501 1.66656C13.1513 1.66848 12.5642 1.84068 12.0508 2.16494C11.5374 2.4892 11.1168 2.95347 10.8334 3.50866C11.774 3.7121 12.6191 4.25072 13.2263 5.03371C13.8336 5.8167 14.1657 6.79614 14.1667 7.80689C14.1654 8.08979 14.1375 8.37186 14.0834 8.64899C14.9355 8.56364 15.7235 8.13561 16.2832 7.45403C16.843 6.77244 17.1314 5.88984 17.0885 4.99C17.0455 4.09016 16.6745 3.24244 16.0526 2.62337C15.4308 2.00429 14.606 1.66156 13.7501 1.66656Z" fill="#374151"/>
                  <path d="M7.80508 11.5192C7.09382 11.0503 6.53176 10.3685 6.19091 9.56127H5.83341C4.72875 9.56266 3.66971 10.0252 2.8886 10.8474C2.10748 11.6696 1.66807 12.7844 1.66675 13.9472V15.7016C1.66675 15.9342 1.75455 16.1574 1.91083 16.3219C2.06711 16.4864 2.27907 16.5788 2.50008 16.5788H4.16675C4.16865 15.4339 4.52477 14.3207 5.18123 13.4078C5.83769 12.4949 6.75876 11.8319 7.80508 11.5192Z" fill="#374151"/>
                  <path d="M14.1667 9.56127H13.8092C13.4684 10.3685 12.9063 11.0503 12.1951 11.5192C13.2414 11.8319 14.1625 12.4949 14.8189 13.4078C15.4754 14.3207 15.8315 15.4339 15.8334 16.5788H17.5001C17.7211 16.5788 17.9331 16.4864 18.0893 16.3219C18.2456 16.1574 18.3334 15.9342 18.3334 15.7016V13.9472C18.3321 12.7844 17.8927 11.6696 17.1116 10.8474C16.3305 10.0252 15.2714 9.56266 14.1667 9.56127Z" fill="#374151"/>
                  <path d="M5.83342 7.80689C5.83447 6.79615 6.16661 5.8167 6.77383 5.03371C7.38104 4.25073 8.22619 3.7121 9.16675 3.50866C8.89468 2.9769 8.49645 2.52835 8.01083 2.20666C7.5252 1.88498 6.96873 1.70112 6.39558 1.67299C5.82242 1.64486 5.25211 1.77341 4.74016 2.04613C4.2282 2.31885 3.79205 2.72645 3.47415 3.22925C3.15625 3.73205 2.96744 4.31293 2.92609 4.91533C2.88474 5.51774 2.99226 6.12115 3.2382 6.66683C3.48413 7.21252 3.86009 7.68188 4.32948 8.02924C4.79887 8.37659 5.3457 8.59011 5.91675 8.649C5.86271 8.37187 5.8348 8.0898 5.83342 7.80689Z" fill="#374151"/>
                </svg>`,
    },
  ];

  selectedOption: string = '';

  options = [
    { value: '1', label: 'Activo' },
    { value: '2', label: 'Inactivo' },
  ];

  // Separate handler to be able to remove it and avoid duplicates
  toggleHandler = (event: Event) => {
    const target = event.target as HTMLInputElement;

    // Only applies if the input has the "toggle-switch" class
    if (target && target.classList.contains('toggle-switch')) {
      const label = target.closest('div')?.querySelector('.status-label') as HTMLElement;

      if (!label) return;

      if (target.checked) {
        label.textContent = 'Activo';
        label.classList.remove('bg-red-200', 'text-red-800', 'border', 'border-red-300');
        label.classList.add('bg-green-200', 'text-green-800', 'border', 'border-green-300');
      } else {
        label.textContent = 'Inactivo';
        label.classList.remove('bg-green-200', 'text-green-800', 'border', 'border-green-300');
        label.classList.add('bg-red-200', 'text-red-800', 'border', 'border-red-300');
      }
    }
  }

  // Method that initializes the listeners once
  initSwitches() {
    const tableBody = document.querySelector('.table tbody');

    if (!tableBody) return;

    tableBody.removeEventListener('change', this.toggleHandler);
    tableBody.addEventListener('change', this.toggleHandler);
  }


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

    //for the table with the toggle
    setTimeout(() => {
      this.initSwitches();
    }, 100);

  }

 //Datatable Start
 dtOptions: Config = {};
  
 titlesList: string[] = ['',]; //Here are the table titles when connected

 data: any[] = [
  { legajo: '0006', empleado: 'Jese Leos', email: 'jleos@originsw.com', rol: 'Empleado', fecha: '02/02/2024' },
  { legajo: '0007', empleado: 'Thomas Leans', email: 'tleans@originsw.com', rol: 'Gerente', fecha: '01/04/2024' },
  { legajo: '0008', empleado: 'Micheal Gough', email: 'MGough@originsw.com', rol: 'Empleado', fecha: '04/06/2024' },
  { legajo: '0009', empleado: 'Helene Engels', email: 'HEngels@originsw.com', rol: 'Tercero', fecha: '01/07/2024' },
  { legajo: '0010', empleado: 'Lana Byrd', email: 'lbyrd@originsw.com', rol: 'Empleado', fecha: '01/07/2024' },
  { legajo: '0011', empleado: 'Leslie Livingston', email: 'LLivingston@originsw.com', rol: 'Empleado', fecha: '03/08/2024' },
  { legajo: '0012', empleado: 'Pedro Pérez', email: 'pedrop@originsw.com', rol: 'Empleado', fecha: '03/08/2024' },
  { legajo: '0013', empleado: 'Facundo Sánchez', email: 'facusanc@originsw.com', rol: 'Empleado', fecha: '02/11/2024' }
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
       { data: 'legajo', title: 'N° legajo' },
       { data: 'null', 
         title: 'Imagen',
         orderable: false,
         render: function (data, type, row, meta) {
           return `<div class="overflow-hidden size-10 border-2 border-gray-300 bg-gray-100 rounded-lg"><img class="object-cover w-full h-full [image-rendering:auto]" alt="image default Origin" src="images/avatars/RobertBrown.png"></div>`;
         }
       },
       { data: 'empleado', title: 'Empleado' },
       { data: 'email', title: 'E-mail' },
       { data: 'rol', title: 'rol' },
       { data: 'fecha', title: 'Fecha de ingreso' },
       { 
         data: null,
         title: 'Estado',
         render: (data, type, row) => {
         const isChecked = row.activo ? 'checked' : '';
         const labelText = row.activo ? 'Activo' : 'Inactivo';

         return `
           <div class="flex items-center gap-4">
             <label class="inline-flex items-center cursor-pointer">
               <input type="checkbox" class="sr-only peer toggle-switch" ${isChecked} />
               <div class="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
             </label>
             <span class="status-label text-xs font-medium px-2.5 py-0.5 rounded-md leading-normal bg-red-200 text-red-800 border border-red-300">
               ${labelText}
             </span>
           </div>
         `;
         },
       },
       {
         title: 'Acciones',
         orderable: false,
         data: null,
         render: function (data, type, row, meta) {
           return `
           <div class="bg-transparent flex gap-4">

            <button
               data-drawer-target="drawer-right-edit-employees" 
               data-drawer-show="drawer-right-edit-employees" 
               data-drawer-placement="right"
               aria-controls="drawer-right-edit-employees" 
               data-tooltip-target="tooltip-edit-${meta.row}" class="group flex justify-center items-center size-8 bg-transparent bg-opacity-100 hover:bg-primary hover:bg-opacity-20 rounded-lg">
               <span class="relative size-6">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 fill-none">
                   <path class="fill-gray-700 group-hover:fill-primary" d="M15.7618 18.9188C15.7618 18.9614 15.7458 19.0022 15.7173 19.0322C15.6887 19.0623 15.65 19.0792 15.6096 19.0792H4.97535C4.93498 19.0792 4.89626 19.0623 4.86771 19.0322C4.83916 19.0022 4.82312 18.9614 4.82312 18.9188V7.71491C4.82312 7.67237 4.83916 7.63157 4.86771 7.6015C4.89626 7.57142 4.93498 7.55452 4.97535 7.55452H11.5167L13.3398 5.63374H4.97535C4.4516 5.63425 3.94945 5.85368 3.5791 6.24386C3.20875 6.63404 3.00048 7.1631 3 7.71491V18.9188C3.00048 19.4706 3.20875 19.9997 3.5791 20.3899C3.94945 20.7801 4.4516 20.9995 4.97535 21H15.6096C16.1334 20.9995 16.6355 20.7801 17.0059 20.3899C17.3762 19.9997 17.5845 19.4706 17.585 18.9188V12.0271L15.7618 13.9478V18.9188Z"/>
                   <path class="fill-gray-700 group-hover:fill-primary" d="M20.1957 3.84357C19.6828 3.30343 18.9874 3 18.2623 3C17.5371 3 16.8417 3.30343 16.3288 3.84357L9.23781 11.3135C9.11071 11.4476 9.02412 11.6184 8.98895 11.8043L8.34448 15.2002C8.31744 15.3397 8.3202 15.4839 8.35256 15.6222C8.38493 15.7605 8.44608 15.8894 8.53159 15.9998C8.6171 16.1101 8.72483 16.199 8.84697 16.26C8.96912 16.321 9.10262 16.3527 9.23781 16.3527C9.29898 16.3525 9.36 16.3463 9.42012 16.3344L12.6425 15.6554C12.819 15.6181 12.9811 15.5265 13.1083 15.3923L20.1984 7.92235C20.4528 7.65454 20.6545 7.33651 20.792 6.98646C20.9296 6.63641 21.0003 6.26122 21 5.88236C20.9997 5.5035 20.9286 5.12842 20.7906 4.77857C20.6525 4.42873 20.4504 4.111 20.1957 3.84357ZM18.9067 5.20156C18.9915 5.29076 19.0587 5.39668 19.1046 5.51327C19.1505 5.62986 19.1741 5.75483 19.1741 5.88104C19.1741 6.00725 19.1505 6.13222 19.1046 6.24881C19.0587 6.3654 18.9915 6.47132 18.9067 6.56052L18.4181 7.07433L17.1292 5.71633L17.6178 5.20156C17.7887 5.02152 18.0205 4.92037 18.2623 4.92037C18.504 4.92037 18.7358 5.02152 18.9067 5.20156ZM12.0117 13.8249L10.4 14.1649L10.7227 12.466L15.8402 7.07433L17.1292 8.43232L12.0117 13.8249Z"/>
                 </svg>
               </span>              
             </button>

             <div id="tooltip-edit-${meta.row}" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip">
                 Editar
                 <div class="tooltip-arrow" data-popper-arrow></div>
             </div>

             <button data-modal-target="employes-delete-modal" data-modal-toggle="employes-delete-modal" data-tooltip-target="tooltip-delete-${meta.row}" class="group flex justify-center items-center size-8 bg-transparent hover:bg-red-600 hover:bg-opacity-20 rounded-lg">
               <span class="relative size-6">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-6 fill-none">
                   <path class="fill-gray-700 group-hover:fill-red-600" d="M20 6.21053H16V4.10526C16 3.54691 15.7893 3.01143 15.4142 2.61662C15.0391 2.2218 14.5304 2 14 2H10C9.46957 2 8.96086 2.2218 8.58579 2.61662C8.21071 3.01143 8 3.54691 8 4.10526V6.21053H4C3.73478 6.21053 3.48043 6.32143 3.29289 6.51884C3.10536 6.71624 3 6.98398 3 7.26316C3 7.54233 3.10536 7.81007 3.29289 8.00748C3.48043 8.20489 3.73478 8.31579 4 8.31579H5V19.8947C5 20.4531 5.21071 20.9886 5.58579 21.3834C5.96086 21.7782 6.46957 22 7 22H17C17.5304 22 18.0391 21.7782 18.4142 21.3834C18.7893 20.9886 19 20.4531 19 19.8947V8.31579H20C20.2652 8.31579 20.5196 8.20489 20.7071 8.00748C20.8946 7.81007 21 7.54233 21 7.26316C21 6.98398 20.8946 6.71624 20.7071 6.51884C20.5196 6.32143 20.2652 6.21053 20 6.21053ZM10 4.10526H14V6.21053H10V4.10526ZM17 19.8947H7V8.31579H17V19.8947Z"/>
                   <path class="fill-gray-700 group-hover:fill-red-600" d="M10 9.36842C9.73478 9.36842 9.48043 9.47932 9.29289 9.67673C9.10536 9.87414 9 10.1419 9 10.4211V17.7895C9 18.0686 9.10536 18.3364 9.29289 18.5338C9.48043 18.7312 9.73478 18.8421 10 18.8421C10.2652 18.8421 10.5196 18.7312 10.7071 18.5338C10.8946 18.3364 11 18.0686 11 17.7895V10.4211C11 10.1419 10.8946 9.87414 10.7071 9.67673C10.5196 9.47932 10.2652 9.36842 10 9.36842Z"/>
                   <path class="fill-gray-700 group-hover:fill-red-600" d="M14 9.36842C13.7348 9.36842 13.4804 9.47932 13.2929 9.67673C13.1054 9.87414 13 10.1419 13 10.4211V17.7895C13 18.0686 13.1054 18.3364 13.2929 18.5338C13.4804 18.7312 13.7348 18.8421 14 18.8421C14.2652 18.8421 14.5196 18.7312 14.7071 18.5338C14.8946 18.3364 15 18.0686 15 17.7895V10.4211C15 10.1419 14.8946 9.87414 14.7071 9.67673C14.5196 9.47932 14.2652 9.36842 14 9.36842Z"/>
                 </svg>
               </span>              
             </button>

             <div id="tooltip-delete-${meta.row}" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 tooltip">
                 Borrar
                 <div class="tooltip-arrow" data-popper-arrow></div>
             </div>

           </div>
         `;
         }
       },
     ],
     drawCallback: () => {
       initFlowbite();       // Restart Flowbite tooltips and components if you use any
       this.initSwitches();  // Reassign listeners for visible switches
     },
   };
 }

 onSelectAll(event: boolean) {
   console.log('Function onSelectAll:', event);
 }
 //Datatable End

}
