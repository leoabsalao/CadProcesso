import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Processo } from './../model/processo';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(private httpClient: HttpClient) { }

  //private readonly API ='/assets/processos.json';
  private readonly API ='http://localhost:8080/api/processos';

  listarProcessosTodos() {
    // return [{ _id: '1', npu: '89789357894378929' , datCadastro: (this.dataCadastro.toLocaleString('pt-BR',{timeZone:'UTC'})),  datVisualizado: (this.dataVisualizado.toLocaleString('pt-BR',{timeZone:'UTC'})),
    //            municipio: 'Barra de Jangada', uf: 'PE',  uploadArq: 'caminho do arquivo', visualizado: true }]
    return this.httpClient.get<Processo[]>(this.API)
  }

  buscaPorId(id: string){
    return this.httpClient.get<Processo>(`${this.API}/${id}`);
  }

  save(record: Processo){
    //console.log(record);
    return this.httpClient.post<Processo>(this.API, record).pipe(first());
  }

  remove(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
