import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { VisualMaterialModule } from './visual-material/visual-material.module';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    VisualMaterialModule
  ],
  exports:[
    ErrorDialogComponent,
    CategoryPipe
  ]
})
export class SharedModule { }
