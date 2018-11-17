import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';
import { Pelicula } from './pelicula';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'EM-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: Pelicula;

  constructor(
    public peliculas_service: PeliculasService,
    
  ) { }

  ngOnInit() {
    this.getPeliculas();
  }


getPeliculas() {

  this.peliculas_service.getPeliculas().subscribe(
    (datos: Pelicula)=>

      this.peliculas = datos.data

  )


}

}
