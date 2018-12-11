import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { MovieTmdb } from '../pelicula';

@Component({
  selector: 'EM-pelicula-list-item',
  templateUrl: './pelicula-list-item.component.html',
  styleUrls: ['./pelicula-list-item.component.css']
})
export class PeliculaListItemComponent implements OnInit {
 
  @Input() tmbd_id : number;
  @Input() id : number;

  movieTmdb: MovieTmdb;
  imagePatch: string;
  
  constructor(
    private peliculas_service : PeliculasService
  ) { }


  ngOnInit() {

    this.getMovieTmdb(this.tmbd_id);
    // console.log(this.tmbd_id)

  }

  getMovieTmdb(tmdb_id){
    this.peliculas_service.getDataMoviesTmdb(tmdb_id).subscribe(
      (datos:MovieTmdb)=>{
        this.movieTmdb = datos;
  
        this.imagePatch = 'https://image.tmdb.org/t/p/w342/'+this.movieTmdb.poster_path;
  
      });
  }

}
