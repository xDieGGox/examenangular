import { Component } from '@angular/core';
import { OperadoresService } from '../services/operadores.service';
import { Operador } from '../domain/operador';
import { Recargarecibo } from '../domain/recargarecibo';
import { RecargasService } from '../services/recargas.service';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrl: './recarga.component.scss'
})
export class RecargaComponent {
  operador: Operador = new Operador();
  recargaRecibo: Recargarecibo= new Recargarecibo();
  codigoOperador: number=0;
  operadores: any;
  recargas: any;

  constructor(private operadoresService: OperadoresService,private recargasService: RecargasService) { }


  ngOnInit(): void {
    this.operadores = this.operadoresService.getOperadores();
    this.recargas = this.recargasService.getRecargas();
  }

  realizarRecarga(){

    if(this.recargaRecibo.numero_recargarecibo!=undefined){
      if (this.recargaRecibo.numero_recargarecibo.length < 10) {
        alert("El número de recarga debe tener al menos 10 dígitos.");
        return; // Terminar la ejecución del método si la validación falla
      }else{
        
        this.recargaRecibo.codigo_operador_recargarecibo=this.codigoOperador;
        console.log(this.codigoOperador);
        console.log(this.recargaRecibo);

        this.recargasService.saveRecarga(this.recargaRecibo).subscribe(data =>{
          if (data.codigo != 0){
            alert("Error al insertar " + data.mensaje);
        
          }else {
            this.ngOnInit();
          }
        })

      }
    }

    
  
  }
}
