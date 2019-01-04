import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pelicula, MovieTmdb, Genre } from './pelicula';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

   public apiKeyTmdb = '5bbaf9565605b6b2d9017d357e8dd99c';
   public language = 'es-ES';

  constructor( 
    private http : HttpClient
  ) {

   }


  getPeliculas(){
    return this.http.get<Pelicula>(environment.urlApi);
  }
  // getPeliculasAll(){
  //   return this.http.get<Pelicula>(environment.urlApi+'?e=true');
  // }

  public getPeliculaID$(id: number) : Observable<MovieTmdb>{
    return this.http.get<MovieTmdb>(environment.urlApi+`/${id}`);
  }


  updateIdTmdb$(movie:MovieTmdb, id): Observable<any>{
    return this.http.put(environment.urlApi+`/${id}`, movie);
  }

////////TMDb
  getDataMoviesTmdb(id_tmdb){
    return this.http.get<MovieTmdb>('https://api.themoviedb.org/3/movie/'+`${id_tmdb}`+'?api_key='+`${this.apiKeyTmdb}`+'&language='+`${this.language}`+'&append_to_response=credits');
  }

  //Generos 
  getDataGenres$(): Observable<Genre>{
    return this.http.get<Genre>(environment.urlGenre);
  }

  getMoviesByGenre$(id: number): Observable<Genre>{
    return this.http.get<Genre>(environment.urlGenre+`/${id}`);
  }

}
