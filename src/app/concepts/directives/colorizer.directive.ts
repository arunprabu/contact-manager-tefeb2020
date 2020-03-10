import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

// Decorator -- makes the class ColorizerDirective - dep injectable
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  private myEl: any;

  constructor( private elRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside colorizer directives constructor');

    // find the element in which the directive is used -- ElementRef
    console.log(this.elRef.nativeElement);
    this.myEl = this.elRef.nativeElement;
    // change the color of that element -- js
    // myEl.style.backgroundColor = 'red';
    // myEl.style.color = '#fff';
    // myEl.style.height = '100px';

    this.renderer.setStyle(this.myEl, 'background-color', 'red');
    this.renderer.setStyle(this.myEl, 'height', '100px');
    this.renderer.setStyle(this.myEl, 'color', '#fff');
  }

  @HostListener('click', ['$event'])
  onElementClick(event) {
    console.log(event);
  }

}
