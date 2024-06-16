import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { ProcessosRoutingModule } from './processos-routing.module';
import { ProcessosComponent } from './processos/processos.component';


@NgModule({
  declarations: [
    ProcessosComponent
  ],
  imports: [
    CommonModule,
    ProcessosRoutingModule,
    MatTableModule
  ]
})
export class ProcessosModule { }
