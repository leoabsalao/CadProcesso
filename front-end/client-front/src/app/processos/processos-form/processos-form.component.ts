import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-processos-form',
  templateUrl: './processos-form.component.html',
  styleUrls: ['./processos-form.component.scss']
})
export class ProcessosFormComponent implements OnInit {

  formProcesso: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formProcesso = this.formBuilder.group({
      npu: [null],
      datCadastro: [null],
      datVisualizado: [null],
      municipio: [null],
      uf: [null],
      uploadArq: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  onCancel(){
    
  }

}
