import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { ProcessosComponent } from './processos/processos.component';
import { ProcessosResolver } from './guards/processos.resolver';

const routes: Routes = [
  { path: '', component: ProcessosComponent },
  { path: 'novoProcesso', component: ProcessosFormComponent, resolve: { processo: ProcessosResolver} },
  { path: 'atualizaProcesso/:id', component: ProcessosFormComponent, resolve: { processo: ProcessosResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
