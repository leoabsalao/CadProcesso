import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Processo } from '../model/processo';
import { ProcessoService } from '../services/processo.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessosResolver implements Resolve<Processo> {

  constructor(private service: ProcessoService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Processo> {
    if (route.params && route.params['id']){
      return this.service.buscaPorId(route.params['id']);
    }
      return of({_id: '', npu:'', datCadastro:'',datVisualizado:'',municipio:'',uploadArq:'',uf:'',visualizado:false});
  }
}
