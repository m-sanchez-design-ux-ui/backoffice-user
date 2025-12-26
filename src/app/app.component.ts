import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/loading/loading.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoadingComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Lunches-Planning-Backoffice';
  ngOnInit(): void {
    initFlowbite();
  }
}
