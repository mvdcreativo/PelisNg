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

  peliculas;
  tmb_id: any;
  movieTmdb: MovieTmdb;
  imagePatch: string;
  loading: boolean = false;

  searchText:string;
  public searching: boolean = false;
  result: any;

  constructor(
    public peliculas_service: PeliculasService,
    
  ) { }

  ngOnInit() {
    this.getPeliculas();
  }


getPeliculas() {
  this.loading = true;

  this.peliculas_service.getPeliculas().subscribe(
    (datos: Pelicula)=> {
      this.peliculas = datos.data;
      this.loading = false;
      if(this.peliculas.length === 0){
        console.log('sin result')
      }
      // console.log(peliTmdb)
    });

}


 showResults(){
   this.loading = true;
    if(this.peliculas.length === 0 || this.searchText === undefined || this.searchText === ''){
      this.loading = false;
      return this.peliculas
    }
    if(this.peliculas.length === 0){
      console.log('sin result')
    }

    return this.peliculas.filter(
      res =>{
        if(res.title.toLowerCase().includes(this.searchText.toLowerCase()) && res.tmdb_id != null ){
          // console.log('hola')

          this.loading = false;
          return true;
        }
        return false;
    });

    
    
  }




}
