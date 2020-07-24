import { Gradient } from './angular-gradient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-test-angular-gradient',
  template: `
    <button [gradient]="gradient" type="button">button</button>

    <table>
      <colgroup>
        <col [gradient]="gradient">
      </colgroup>
      <tr>
        <th>ISBN</th>
        <th>Title</th>
        <th>Price</th>
      </tr>

      <tr>
        <td>3476896</td>
        <td>My first HTML</td>
        <td>$53</td>
      </tr>
    </table>

    <dialog open [gradient]="gradient">This is an open dialog window</dialog>

    <div [gradient]="gradient"></div>

    <footer [gradient]="gradient">footer</footer>

    <header [gradient]="gradient">header</header>

    <hr [gradient]="hrGradient">

    <p>Do not forget to buy <mark [gradient]="gradient">milk</mark> today.</p>

    <meter [gradient]="gradient" value="2" min="0" max="10">2 out of 10</meter>

    <progress [gradient]="gradient" value="32" max="100"> 32% </progress>

    <table [gradient]="gradient">
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>

    <textarea [gradient]="gradient" name="w3review" rows="4" cols="50">
      At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
    </textarea>
  `,
  styles: ['div { width: 100px; height: 100px; }']
})
export class TestAngularGradientComponent implements OnInit {
  gradient: Gradient = { rotation: 0, colors: [ '#4caf50', '#ff9800' ] };
  hrGradient: Gradient = { rotation: 90, colors: [ '#4caf50', '#ff9800' ] };

  constructor() { }

  ngOnInit(): void { }
}
