import { Gradient } from './angular-gradient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-angular-text-gradent',
  template: `
    <a href="#" [gradientText]="gradient">anchor text</a>

    <br>
    <b [gradientText]="gradient">b text</b>

    <blockquote [gradientText]="gradient">blockquote text</blockquote>

    <code [gradientText]="gradient">code text</code>

    <br>
    <del [gradientText]="gradient">deleted text text</del>

    <br>
    <em [gradientText]="gradient">emphasized text text</em>

    <h1 [gradientText]="gradient">h1 text</h1>
    <h2 [gradientText]="gradient">h2 text</h2>
    <h3 [gradientText]="gradient">h3 text</h3>
    <h4 [gradientText]="gradient">h4 text</h4>
    <h5 [gradientText]="gradient">h5 text</h5>
    <h6 [gradientText]="gradient">h6 text</h6>

    <i [gradientText]="gradient">italic text</i>

    <p [gradientText]="gradient">p text</p>

    <s [gradientText]="gradient">s text</s>

    <br>
    <span [gradientText]="gradient">span text</span>

    <br>
    <strong [gradientText]="gradient">strong text</strong>

    <br>
    <sub [gradientText]="gradient">subscript text</sub>

    <br>
    <sup [gradientText]="gradient">superscript text</sup>

    <br>
    <u [gradientText]="gradient">underlined text</u>

    <br>
    <var [gradientText]="gradient">variable text</var>
  `,
  styles: []
})
export class TestAngularTextGradientComponent implements OnInit {
  gradient: Gradient = { rotation: 0, colors: [ '#f44336', '#3f51b5' ] };

  constructor() { }

  ngOnInit(): void { }
}
