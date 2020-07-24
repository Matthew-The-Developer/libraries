import { TestAngularGradientComponent } from './test-angular-gradient.component';
import { AngularGradientDirective } from './angular-gradient.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AngularGradientDirective', () => {
  let fixture: ComponentFixture<TestAngularGradientComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestAngularGradientComponent, AngularGradientDirective ]
    })
    .createComponent(TestAngularGradientComponent);

    fixture.detectChanges();
  });

  it('button gradient', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('button');

    console.log(button.style.background);
    expect(button.style.background).toBe('linear-gradient(0deg, rgb(76, 175, 80), rgb(255, 152, 0))');
  });

  it('col gradient', () => {
    const col: HTMLElement = fixture.nativeElement.querySelector('col');

    console.log(col.style.background);
    expect(col.style.background).toBe('linear-gradient(0deg, rgb(76, 175, 80), rgb(255, 152, 0))');
  });

  it('div gradient', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('div');

    console.log(div.style.background);
    expect(div.style.background).toBe('linear-gradient(0deg, rgb(76, 175, 80), rgb(255, 152, 0))');
  });

  it('meter gradient', () => {
    const meter: HTMLElement = fixture.nativeElement.querySelector('meter');

    console.log(meter.style.background);
    expect(meter.style.background).toBe('');
  });
});
