import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcessosFormComponent } from './processos-form/processos-form.component';
import { ProcessosComponent } from './processos/processos.component';

const routes: Routes = [
  { path: '', component: ProcessosComponent },
  { path: 'novoProcesso', component: ProcessosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessosRoutingModule { }
