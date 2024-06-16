import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { VisualMaterialModule } from '../shared/visual-material/visual-material.module';
import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosComponent } from './processos/processos.component';


@NgModule({
  declarations: [
    ProcessosComponent,
    ProcessosFormComponent
  ],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    VisualMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProcessosModule { }
