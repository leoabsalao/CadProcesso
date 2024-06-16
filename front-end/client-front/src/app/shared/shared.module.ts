import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { VisualMaterialModule } from './visual-material/visual-material.module';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    VisualMaterialModule
  ],
  exports:[
    ErrorDialogComponent
  ]
})
export class SharedModule { }
