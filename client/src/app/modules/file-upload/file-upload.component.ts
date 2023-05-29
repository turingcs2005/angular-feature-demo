import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  constructor(
    private http: HttpClient
  ) {}

  onFileDropped(files: FileList) {
    console.log('file dropped!');
    if (files?.length) {
      console.log(`%c ${files.length} files have been dropped.`, 'color: green');
    }
  }

  onFileSelected(event: Event) {
    let files = (<HTMLInputElement>event.target).files;
    if (files?.length) {
      console.log(`%c ${files.length} files have been selected.`, 'color: green')
    }

  }

}
