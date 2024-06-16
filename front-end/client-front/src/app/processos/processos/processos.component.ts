import { Component, OnInit } from '@angular/core';
import { Processo } from '../model/processo';
import { ProcessoService } from './../services/processo.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  DataSourceProcessos$: Observable<Processo[]>;

  displayedColumns = ['npu','datCadastro', 'datVisualizado', 'municipio', 'uf', 'uploadArq', 'visualizado'];

  constructor(
    private processoServico: ProcessoService,
    public dialog: MatDialog
  ) {
    // Chamando os métodos da camada de Serviço
      this.DataSourceProcessos$ = this.processoServico.listarProcessosTodos().pipe(
        catchError(error => {
          this.onError('Erro ao carregar os processos.')
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
