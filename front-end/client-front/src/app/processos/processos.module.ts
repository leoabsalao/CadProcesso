import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosComponent } from './processos/processos.component';


@NgModule({
  declarations: [
    ProcessosComponent
  ],
  imports: [
    CommonModule,
    ProcessosRoutingModule
  ]
})
export class ProcessosModule { }
