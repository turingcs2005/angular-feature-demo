import { Directive, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('value') message = '';
  @HostBinding('class.red') classRed = false;
  @HostBinding('class.blue') classBlue = false;

  @HostListener('mouseover') onMouseOver() {
    this.message = 'Welcome to Massachusetts';
    this.classBlue = false;
    this.classRed = true;
  }

  @HostListener('mouseout') onMouseOut() {
    this.message = 'Hello, world!';
    this.classRed = false;
    this.classBlue = true;
  }

  constructor() { }

}
