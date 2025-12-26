import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import flatpickr from "flatpickr";
import { Spanish } from "flatpickr/dist/l10n/es.js";

@Component({
  selector: 'app-edit-employees-drawer',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './edit-employees-drawer.component.html',
  styleUrl: './edit-employees-drawer.component.css'
})
export class EditEmployeesDrawerComponent implements AfterViewInit {

  selectedOption02: string = '';

  options02 = [
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
