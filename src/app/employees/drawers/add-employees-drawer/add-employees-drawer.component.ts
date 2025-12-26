import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js";

@Component({
  selector: 'app-add-employees-drawer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-employees-drawer.component.html',
  styleUrl: './add-employees-drawer.component.css'
})
export class AddEmployeesDrawerComponent implements AfterViewInit {

  selectedOption: string = '';

  options = [
    { value: '1', label: 'Bs. As. (sede central).' },
    { value: '2', label: 'Pilar' },
    { value: '3', label: 'Rosario' },
  ];
  
  ngAfterViewInit() {
    flatpickr("#datepicker", {
      locale: Spanish,
      dateFormat: "d/m/Y",
      // maxDate: "today",
    });
  }

}
