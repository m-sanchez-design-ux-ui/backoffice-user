import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from './loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
})
export class LoadingComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  private count = 0;
  public show = false;

  constructor(
    private readonly loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.subscription = this.loadingService.loadingState.subscribe(state => {
      if (state.show) {
        this.count++;
      } else {
        this.count--;
      }

      if (this.count <= 0) {
        this.count = 0;
        this.show = false;
      } else {
        this.show = true;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}



