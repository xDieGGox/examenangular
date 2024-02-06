import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class OperadoresService {

  constructor(private http: HttpClient) { }

  getOperadores(){
    let url = enviroment.WS_PATH+"/operadores/list";
    return this.http.get<any>(url);
  }
}
