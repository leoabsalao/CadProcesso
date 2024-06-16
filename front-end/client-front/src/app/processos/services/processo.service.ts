import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Processo } from '../model/processo';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(private httpClient: HttpClient) { }

  private readonly API ='/assets/processos.json';

  dataCadastro: Date = new Date("2024-06-20");
  dataVisualizado: Date = new Date("2024-06-24");

  listarProcessosTodos() {
    // return [{ _id: '1', npu: '89789357894378929' , datCadastro: (this.dataCadastro.toLocaleString('pt-BR',{timeZone:'UTC'})),  datVisualizado: (this.dataVisualizado.toLocaleString('pt-BR',{timeZone:'UTC'})),
    //            municipio: 'Barra de Jangada', uf: 'PE',  uploadArq: 'caminho do arquivo', visualizado: true }]

    return this.httpClient.get<Processo[]>(this.API);
  }

}
