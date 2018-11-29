import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';
import { Pelicula, MovieTmdb } from './pelicula';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'EM-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {

  peliculas: Pelicula;
  tmb_id: any;
  movieTmdb: MovieTmdb;
  imagePatch: string;

  constructor(
    public peliculas_service: PeliculasService,
    
  ) { }

  ngOnInit() {
    this.getPeliculas();
  }


getPeliculas() {

  this.peliculas_service.getPeliculas().subscribe(
    (datos: Pelicula)=> {
      this.peliculas = datos.data;
      // console.log(peliTmdb)

 
      
      

      // this.tmb_id = this.peliculas.tmdb_id;
        //this.getMovieTmdb(this.tmb_id);


    });

}


}
