import { Component, OnInit } from '@angular/core';
import { Processo } from '../model/processo';
import { ProcessoService } from './../services/processo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  DataSourceProcessos: Observable<Processo[]>;

  displayedColumns = ['npu','datCadastro', 'datVisualizado', 'municipio', 'uf', 'uploadArq', 'visualizado'];


  constructor(private processoServico: ProcessoService) {
    // Chamando os métodos da camada de Serviço
      this.DataSourceProcessos = this.processoServico.listarProcessosTodos();
  }

  ngOnInit(): void {
  }

}
