import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
  
  termino:string = "";
  error:boolean = false;
  constructor(private paisService: PaisService) { }

  buscar(){
    this.error = false;
    this.paisService.buscarPais(this.termino)
    .subscribe(respuesta =>{
      console.log(respuesta);
    }, (err) =>{
      this.error = true;
      console.log("Tremendo error",err);
      
    });
    console.log(this.termino);
  }

}
