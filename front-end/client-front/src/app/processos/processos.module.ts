import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VisualMaterialModule } from '../shared/visual-material/visual-material.module';
import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosComponent } from './processos/processos.component';


@NgModule({
  declarations: [
    ProcessosComponent
  ],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    VisualMaterialModule
  ]
})
export class ProcessosModule { }
