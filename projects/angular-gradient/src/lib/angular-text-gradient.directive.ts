import { Directive, OnChanges, ElementRef, Renderer2, Input } from '@angular/core';
import { Gradient } from './angular-gradient.model';
import { Tag } from './angular-gradient.enum';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[gradientText]'
})
export class AngularTextGradientDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('gradientText') gradient: Gradient;

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnChanges() {
    this.setGradient(this.getGradient());
  }

  getGradient(): string {
    return `linear-gradient(${this.gradient.rotation}deg, ${this.gradient.colors.join()})`;
  }

  setGradient(gradient: string) {
    switch (this.element.nativeElement.tagName) {
      case Tag.a:
      case Tag.del:
      case Tag.s:
      case Tag.u:
        this.render.setStyle(this.element.nativeElement, 'text-decoration-color', this.gradient.colors[0]);
        this.render.setStyle(this.element.nativeElement, 'background', gradient);
        this.render.setStyle(this.element.nativeElement, 'background-clip', 'text');
        this.render.setStyle(this.element.nativeElement, '-webkit-background-clip', 'text');
        this.render.setStyle(this.element.nativeElement, '-webkit-text-fill-color', 'transparent');
        break;

      case Tag.h1:
      case Tag.h2:
      case Tag.h3:
      case Tag.h4:
      case Tag.h5:
      case Tag.h6:
        this.render.setStyle(this.element.nativeElement, 'line-height', 'normal');
        this.render.setStyle(this.element.nativeElement, 'background', gradient);
        this.render.setStyle(this.element.nativeElement, 'background-clip', 'text');
        this.render.setStyle(this.element.nativeElement, '-webkit-background-clip', 'text');
        this.render.setStyle(this.element.nativeElement, '-webkit-text-fill-color', 'transparent');
        break;

      default:
        this.render.setStyle(this.element.nativeElement, 'background', gradient);
        this.render.setStyle(this.element.nativeElement, 'background-clip', 'text');
        this.render.setStyle(this.element.nativeElement, '-webkit-background-clip', 'text');
        this.render.setStyle(this.element.nativeElement, '-webkit-text-fill-color', 'transparent');
        break;
    }
  }
}
