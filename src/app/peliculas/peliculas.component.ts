import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'EM-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public peliculas;

  constructor(
    public peliculas_service: PeliculasService
  ) { }

  ngOnInit() {
    this.getPeliculas();
  }


getPeliculas() {
  this.peliculas = this.peliculas_service.peliculas;
  console.log(this.peliculas)
}

}
