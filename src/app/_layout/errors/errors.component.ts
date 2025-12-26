import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-errors',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './errors.component.html',
})
export class ErrorsComponent {

}
