import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoadingService } from '../../shared/loading/loading.service';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error-404.component.html',
})
export class Error404Component {
  constructor(private readonly router: Router,  private readonly loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.hide();
  }
}
