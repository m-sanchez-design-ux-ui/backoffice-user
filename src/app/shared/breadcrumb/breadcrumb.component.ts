import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FeatherModule } from 'angular-feather';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink, FeatherModule],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  private _breadcrumbItems: BreadcrumbItem[] = [];

  @Input()
  set breadcrumItems(items: BreadcrumbItem[]) {
    this._breadcrumbItems = items.map((item) => ({
      ...item,
      safeIconSvg: item.iconSvg
        ? this.sanitizer.bypassSecurityTrustHtml(item.iconSvg)
        : undefined,
    }));
  }

  get breadcrumItems(): BreadcrumbItem[] {
    return this._breadcrumbItems;
  }

  constructor(private sanitizer: DomSanitizer) {}
}

export interface BreadcrumbItem {
  text: string;
  isLink: boolean;
  routerLink: string;
  iconSvg?: string;
  safeIconSvg?: SafeHtml;
}
