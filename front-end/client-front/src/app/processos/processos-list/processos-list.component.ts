import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Processo } from '../model/processo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-processos-list',
  templateUrl: './processos-list.component.html',
  styleUrls: ['./processos-list.component.scss']
})
export class ProcessosListComponent implements OnInit {

  @Input() DataSourceProcessos: Processo[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['npu','datCadastro', 'datVisualizado', 'municipio', 'uf', 'uploadArq', 'visualizado','actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
  }

}
