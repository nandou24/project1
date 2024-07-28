import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBrokenImage]'
})
export class BrokenImageDirective {

  constructor(
    private el: ElementRef
  ) { } //!el ===> ELEMENTO AL QUE SE LE ESTÁ APLICANDO LA DIRECTIVA


  @HostListener('error')
  private loadNoImage(){
    this.el.nativeElement.src = 'assets/no-image.jpg'
  }

}
