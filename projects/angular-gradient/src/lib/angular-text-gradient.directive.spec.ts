import { TestAngularTextGradientComponent } from './test-angular-text-gradient.component';
import { AngularTextGradientDirective } from './angular-text-gradient.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('AngularTextGradientDirective', () => {
  let fixture: ComponentFixture<TestAngularTextGradientComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestAngularTextGradientComponent, AngularTextGradientDirective ]
    })
    .createComponent(TestAngularTextGradientComponent);

    fixture.detectChanges();
  });

  it('a text gradient', () => {
    const a: HTMLElement = fixture.nativeElement.querySelector('a');

    console.log(a.style.textDecorationColor);
    expect(a.style.textDecorationColor).toBe('rgb(244, 67, 54)');

    expect(a.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(a.style.backgroundClip).toBe('text');
    expect(a.style.webkitBackgroundClip).toBe('text');
    expect(a.style.webkitTextFillColor).toBe('transparent');
  });

  it('b text gradient', () => {
    const b: HTMLElement = fixture.nativeElement.querySelector('b');

    expect(b.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(b.style.backgroundClip).toBe('text');
    expect(b.style.webkitBackgroundClip).toBe('text');
    expect(b.style.webkitTextFillColor).toBe('transparent');
  });

  it('blockquote text gradient', () => {
    const blockquote: HTMLElement = fixture.nativeElement.querySelector('blockquote');

    expect(blockquote.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(blockquote.style.backgroundClip).toBe('text');
    expect(blockquote.style.webkitBackgroundClip).toBe('text');
    expect(blockquote.style.webkitTextFillColor).toBe('transparent');
  });

  it('code text gradient', () => {
    const code: HTMLElement = fixture.nativeElement.querySelector('code');

    expect(code.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(code.style.backgroundClip).toBe('text');
    expect(code.style.webkitBackgroundClip).toBe('text');
    expect(code.style.webkitTextFillColor).toBe('transparent');
  });

  it('del text gradient', () => {
    const del: HTMLElement = fixture.nativeElement.querySelector('del');

    expect(del.style.textDecorationColor).toBe('rgb(244, 67, 54)');
    expect(del.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(del.style.backgroundClip).toBe('text');
    expect(del.style.webkitBackgroundClip).toBe('text');
    expect(del.style.webkitTextFillColor).toBe('transparent');
  });

  it('em text gradient', () => {
    const em: HTMLElement = fixture.nativeElement.querySelector('em');

    expect(em.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(em.style.backgroundClip).toBe('text');
    expect(em.style.webkitBackgroundClip).toBe('text');
    expect(em.style.webkitTextFillColor).toBe('transparent');
  });

  it('h1 text gradient', () => {
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.style.lineHeight).toBe('normal');
    expect(h1.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(h1.style.backgroundClip).toBe('text');
    expect(h1.style.webkitBackgroundClip).toBe('text');
    expect(h1.style.webkitTextFillColor).toBe('transparent');
  });

  it('h2 text gradient', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');

    expect(h2.style.lineHeight).toBe('normal');
    expect(h2.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(h2.style.backgroundClip).toBe('text');
    expect(h2.style.webkitBackgroundClip).toBe('text');
    expect(h2.style.webkitTextFillColor).toBe('transparent');
  });

  it('h3 text gradient', () => {
    const h3: HTMLElement = fixture.nativeElement.querySelector('h3');

    expect(h3.style.lineHeight).toBe('normal');
    expect(h3.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(h3.style.backgroundClip).toBe('text');
    expect(h3.style.webkitBackgroundClip).toBe('text');
    expect(h3.style.webkitTextFillColor).toBe('transparent');
  });

  it('h4 text gradient', () => {
    const h4: HTMLElement = fixture.nativeElement.querySelector('h4');

    expect(h4.style.lineHeight).toBe('normal');
    expect(h4.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(h4.style.backgroundClip).toBe('text');
    expect(h4.style.webkitBackgroundClip).toBe('text');
    expect(h4.style.webkitTextFillColor).toBe('transparent');
  });

  it('h5 text gradient', () => {
    const h5: HTMLElement = fixture.nativeElement.querySelector('h5');

    expect(h5.style.lineHeight).toBe('normal');
    expect(h5.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(h5.style.backgroundClip).toBe('text');
    expect(h5.style.webkitBackgroundClip).toBe('text');
    expect(h5.style.webkitTextFillColor).toBe('transparent');
  });

  it('h6 text gradient', () => {
    const h6: HTMLElement = fixture.nativeElement.querySelector('h6');

    expect(h6.style.lineHeight).toBe('normal');
    expect(h6.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(h6.style.backgroundClip).toBe('text');
    expect(h6.style.webkitBackgroundClip).toBe('text');
    expect(h6.style.webkitTextFillColor).toBe('transparent');
  });

  it('i text gradient', () => {
    const i: HTMLElement = fixture.nativeElement.querySelector('i');

    expect(i.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(i.style.backgroundClip).toBe('text');
    expect(i.style.webkitBackgroundClip).toBe('text');
    expect(i.style.webkitTextFillColor).toBe('transparent');
  });

  it('p text gradient', () => {
    const p: HTMLElement = fixture.nativeElement.querySelector('p');

    expect(p.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(p.style.backgroundClip).toBe('text');
    expect(p.style.webkitBackgroundClip).toBe('text');
    expect(p.style.webkitTextFillColor).toBe('transparent');
  });

  it('s text gradient', () => {
    const s: HTMLElement = fixture.nativeElement.querySelector('s');

    expect(s.style.textDecorationColor).toBe('rgb(244, 67, 54)');
    expect(s.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(s.style.backgroundClip).toBe('text');
    expect(s.style.webkitBackgroundClip).toBe('text');
    expect(s.style.webkitTextFillColor).toBe('transparent');
  });

  it('span text gradient', () => {
    const span: HTMLElement = fixture.nativeElement.querySelector('span');

    expect(span.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(span.style.backgroundClip).toBe('text');
    expect(span.style.webkitBackgroundClip).toBe('text');
    expect(span.style.webkitTextFillColor).toBe('transparent');
  });

  it('strong text gradient', () => {
    const strong: HTMLElement = fixture.nativeElement.querySelector('strong');

    expect(strong.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(strong.style.backgroundClip).toBe('text');
    expect(strong.style.webkitBackgroundClip).toBe('text');
    expect(strong.style.webkitTextFillColor).toBe('transparent');
  });

  it('sub text gradient', () => {
    const sub: HTMLElement = fixture.nativeElement.querySelector('sub');

    expect(sub.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(sub.style.backgroundClip).toBe('text');
    expect(sub.style.webkitBackgroundClip).toBe('text');
    expect(sub.style.webkitTextFillColor).toBe('transparent');
  });

  it('sup text gradient', () => {
    const sup: HTMLElement = fixture.nativeElement.querySelector('sup');

    expect(sup.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(sup.style.backgroundClip).toBe('text');
    expect(sup.style.webkitBackgroundClip).toBe('text');
    expect(sup.style.webkitTextFillColor).toBe('transparent');
  });

  it('u text gradient', () => {
    const u: HTMLElement = fixture.nativeElement.querySelector('u');

    expect(u.style.textDecorationColor).toBe('rgb(244, 67, 54)');
    expect(u.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(u.style.backgroundClip).toBe('text');
    expect(u.style.webkitBackgroundClip).toBe('text');
    expect(u.style.webkitTextFillColor).toBe('transparent');
  });

  it('var text gradient', () => {
    const variable: HTMLElement = fixture.nativeElement.querySelector('var');

    expect(variable.style.background).toBe('linear-gradient(0deg, rgb(244, 67, 54), rgb(63, 81, 181)) text');
    expect(variable.style.backgroundClip).toBe('text');
    expect(variable.style.webkitBackgroundClip).toBe('text');
    expect(variable.style.webkitTextFillColor).toBe('transparent');
  });
});
