import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ProcessoService } from '../services/processo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Processo } from '../model/processo';

@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.scss']
})
export class ProcessosFormComponent implements OnInit {

  //formProcesso: FormGroup;
  formProcesso = this.formBuilder.group({
    _id: [''],
    npu: ['', [Validators.required, Validators.maxLength(20)]],
    datCadastro: ['', [Validators.required, Validators.maxLength(10)]],
    datVisualizado: ['', [Validators.required, Validators.maxLength(10)]],
    municipio: ['', [Validators.required]],
    uf: ['', [Validators.required]],
    uploadArq: [''],
    visualizado: false
  });

  constructor(private formBuilder: FormBuilder,
    private service: ProcessoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const processo: Processo = this.route.snapshot.data['processo'];
    this.formProcesso.setValue({
      _id: processo._id,
      npu: processo.npu,
      datCadastro: processo.datCadastro,
      datVisualizado: processo.datVisualizado,
      municipio: processo.municipio,
      uf: processo.uf,
      uploadArq: processo.uploadArq,
      visualizado: processo.visualizado
    });
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

  getErrorMessage(fieldName: string){
    const field = this.formProcesso.get(fieldName);

    if (field?.hasError('required')){
        return 'Campo obrigatório';
    }

    if (field?.hasError('maxlength')){      
      return 'Excedeu o tamnho máximo permitido pelo campo.';
    }

    return 'Campo inválido!';
  }
}
