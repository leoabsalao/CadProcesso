import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ProcessoService } from '../services/processo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.scss']
})
export class ProcessosFormComponent implements OnInit {

  formProcesso: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: ProcessoService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.formProcesso = this.formBuilder.group({
      npu: [null],
      datCadastro: [null],
      datVisualizado: [null],
      municipio: [null],
      uf: [null],
      uploadArq: [null],
      visualizado: false
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
     this.service.save(this.formProcesso.value).subscribe(result => this.onSucesso(), error => this.onError());
   // console.log(this.formProcesso.value);
  }

  onCancel(){
    this.location.back();
  }

  private onSucesso(){
    this.snackBar.open('Processo salvo com sucesso.','',{duration:5000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar o processo.','',{duration:5000});
  }
}
