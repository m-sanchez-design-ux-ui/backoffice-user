import { Directive, ElementRef, HostListener } from '@angular/core';
import { Globals } from '../../globals';

@Directive({
  selector: '[appResizeEvent]',
  standalone: true
})
export class ResizeEventDirective {
  constructor(private elem: ElementRef, private globals: Globals) {}

  @HostListener('window:resize')
  onResize() {
    this.globals.setScreenSize(window.innerWidth);
  }
}
