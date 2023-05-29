import { Directive, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {

  // use wiggle to give a hint to user that file(s are over drag-drop component and can be dropped)
  @HostBinding('class.wiggle') wiggle = false;
  @Output() fileDropped = new EventEmitter<FileList>();

  // when a user drags file(s) over component, component starts to wiggle
  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.wiggle = true;
  }

  // when a user mouses away from component, component wiggle stops
  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.wiggle = false;
  }

  // drop listener
  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.wiggle = false; // wiggle stops after files are dropped
    let files = event.dataTransfer?.files;

    // if an array of files are dropped, emit files
    if (files?.length) {
      this.fileDropped.emit(files);
    } else {
      console.log('%c something is wrong!', 'color: red');
    }
  }

  constructor() { }

}
