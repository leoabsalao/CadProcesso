import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessosComponent } from './processos/processos.component';

const routes: Routes = [
  { path: '', component: ProcessosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
