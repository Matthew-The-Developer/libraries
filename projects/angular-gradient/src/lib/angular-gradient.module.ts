import { NgModule } from '@angular/core';
import { AngularGradientDirective } from './angular-gradient.directive';
import { AngularTextGradientDirective } from './angular-text-gradient.directive';
import { TestAngularTextGradientComponent } from './test-angular-text-gradient.component';
import { TestAngularGradientComponent } from './test-angular-gradient.component';

@NgModule({
  declarations: [AngularGradientDirective, AngularTextGradientDirective, TestAngularTextGradientComponent, TestAngularGradientComponent],
  imports: [],
  exports: [AngularGradientDirective, AngularTextGradientDirective]
})
export class AngularGradientModule { }
