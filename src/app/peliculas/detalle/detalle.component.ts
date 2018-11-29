import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { Pelicula, MovieTmdb, Crew, Cast } from '../pelicula';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from "@angular/platform-browser/src/security/dom_sanitization_service";

@Component({
  selector: 'EM-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id:number;
  pelicula: Pelicula;
  urlOpenload ;
  Openload: SafeResourceUrl;
  id_tmdb: any;
  movieTmdb: MovieTmdb;
  imagePatch: string;
  personal: Crew[];
  cast: Cast[];
  cast_image: string;

  constructor(
    private params : ActivatedRoute,
    private movieService : PeliculasService,
    private sanitizer: DomSanitizer
  ) { }
  
  ngOnInit() {
    this.id = this.params.snapshot.params['id'];
    this.id_tmdb = this.params.snapshot.params['tmdb_id'];
    this.getPelicula(this.id);
    this.getMovieTmdb(this.id_tmdb)
  }


  getPelicula(id){
   
    this.movieService.getPeliculaID(id).subscribe(
      (datos:Pelicula)=>{
        this.pelicula = datos.data;
        this.urlOpenload = 'https://openload.co/embed/'+this.pelicula.extid;
        this.Openload = this.sanitizer.bypassSecurityTrustResourceUrl( this.urlOpenload)

      })
  }

  getMovieTmdb(tmdb_id){
    this.movieService.getDataMoviesTmdb(tmdb_id).subscribe(
      (datos:MovieTmdb)=>{
        this.movieTmdb = datos;
        this.personal = this.movieTmdb.credits.crew;
        this.cast = this.movieTmdb.credits.cast;
        this.cast_image = 'https://image.tmdb.org/t/p/w92/';
        this.imagePatch = 'https://image.tmdb.org/t/p/w500/'+this.movieTmdb.poster_path;
  
        console.log(this.cast);
      });
  }
}
