import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoadingService } from '../../shared/loading/loading.service';

@Component({
  selector: 'app-error-500',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error-500.component.html',
})
export class Error500Component implements OnInit {
  constructor(private readonly router: Router,  private readonly loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.hide();
  }
}
