import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {
  
  termino:string = "";
  error:boolean = false;
  paises: Country[] = []

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.error = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe(paises =>{
      this.paises = paises;
      // console.log(paises);
    }, (err) =>{
      this.error = true;
      this.paises = [];
      console.log("Tremendo error",err);
      
    });

  }
  sugerencias(termino:string){
    this.error = false;
  }

}
