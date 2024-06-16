import { Component, OnInit } from '@angular/core';
import { Processo } from '../model/processo';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  DataSourceProcessos: Processo[] = [];
  displayedColumns = ['npu','datCadastro', 'datVisualizado', 'municipio', 'uf', 'uploadArq', 'visualizado'];

  constructor() {
  }

  ngOnInit(): void {
  }

}
