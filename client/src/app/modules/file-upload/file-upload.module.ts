import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FileUploadRoutingModule
  ]
})
export class FileUploadModule { }
