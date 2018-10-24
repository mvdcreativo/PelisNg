import { Injectable } from '@angular/core';
import { Pelicula } from './pelicula';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

   


  constructor( 
    private http : HttpClient
  ) {

   }


  getPeliculas(){
    return this.http.get<Pelicula>(environment.urlApi);
  }

  getPeliculaID(id){
    return this.http.get<Pelicula>(environment.urlApi+`/${id}`);
  }
}
