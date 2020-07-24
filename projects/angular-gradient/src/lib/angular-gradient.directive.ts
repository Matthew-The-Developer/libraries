import { Directive, OnChanges, ElementRef, Renderer2, Input } from '@angular/core';
import { Gradient } from './angular-gradient.model';
import { Tag } from './angular-gradient.enum';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[gradient]'
})
export class AngularGradientDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('gradient') gradient: Gradient;

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnChanges() {
    this.setGradient(this.getGradient());
  }

  getGradient(): string {
    return `linear-gradient(${this.gradient.rotation}deg, ${this.gradient.colors.join()})`;
  }

  setGradient(gradient: string) {
    switch (this.element.nativeElement.tagName) {
      case Tag.hr:
        this.render.setStyle(this.element.nativeElement, 'background', gradient);
        this.render.setStyle(this.element.nativeElement, 'height', '1px');
        break;

      case Tag.meter:
      case Tag.progress:
        break;

      default:
        this.render.setStyle(this.element.nativeElement, 'background', gradient);
    }
  }
}
