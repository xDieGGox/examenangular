import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recargarecibo } from '../domain/recargarecibo';
import { enviroment } from '../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {

  constructor(private http: HttpClient) { }

  getRecargas(){
    let url = enviroment.WS_PATH+"/recargas/list";
    return this.http.get<any>(url);
  }

  saveRecarga(recargaRecibo: Recargarecibo){
    let url = enviroment.WS_PATH+"/recargas";
    return this.http.post<any>(url, recargaRecibo);
  }
}
