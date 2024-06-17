import { Component, OnInit } from '@angular/core';
import { Processo } from '../model/processo';
import { ProcessoService } from './../services/processo.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  DataSourceProcessos$: Observable<Processo[]>;

  displayedColumns = ['npu','datCadastro', 'datVisualizado', 'municipio', 'uf', 'uploadArq', 'visualizado','actions'];

  constructor(
    private processoServico: ProcessoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Chamando os métodos da camada de Serviço
      this.DataSourceProcessos$ = this.processoServico.listarProcessosTodos().pipe(
        catchError(error => {
          this.onError('Erro ao carregar os processos.')
          return of([])
        })
      );
  }

  onAdd(){
    this.router.navigate(['novoProcesso'], {relativeTo: this.route});
  }

  onEdit(processo: Processo){
    this.router.navigate(['atualizaProcesso', processo._id],{relativeTo: this.route});
  }

  onDelete(){

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
