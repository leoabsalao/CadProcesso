import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Processo } from '../model/processo';
import { ProcessoService } from './../services/processo.service';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  DataSourceProcessos$: Observable<Processo[]> | null = null;

  displayedColumns = ['npu','datCadastro', 'datVisualizado', 'municipio', 'uf', 'uploadArq', 'visualizado','actions'];

  constructor(
    private processoServico: ProcessoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar:MatSnackBar
  ) {
    this.refresh();
  }

  refresh(){
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

  onRemove(processo: Processo){
    this.processoServico.remove(processo._id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Processo removido com sucesso.','',{
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
        () => this.onError('Erro ao tentar remover um processo.') 
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
