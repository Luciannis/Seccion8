import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino:string = "";
  error:boolean = false;
  paises: Country[] = []
  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.error = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
    .subscribe(paises =>{
      this.paises = paises;
      // console.log(paises);
    }, (err) =>{
      this.error = true;
      this.paises = [];
      console.log("Tremendo error",err);
      
    });

  }

}
