import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../peliculas.service';
import { Pelicula, MovieTmdb, Crew, Cast } from '../pelicula';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from "@angular/platform-browser/src/security/dom_sanitization_service";
import { formatNumber } from '@angular/common';



@Component({
  selector: 'EM-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

<<<<<<< HEAD
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
  loading = false;
  playPortada: boolean = true;

  titles_rating: any= ['Malisima','Mala', 'Mala' ,'Mediocre' ,'Mediocre' , 'Aceptable','Buena', 'Buena','Muy Buena', 'Excelente'];
  rate;
  imageBg: string;
  value_display_rating: string;
  
 
  
=======
  public id:number;
  public pelicula: Pelicula;
  public urlOpenload ;
  Openload: import("@angular/platform-browser/src/security/dom_sanitization_service").SafeResourceUrl;
>>>>>>> 436a705bfc5f8508cf457d9bf11834efb1d4608d

  constructor(
    private params : ActivatedRoute,
    private movieService : PeliculasService,
    private sanitizer: DomSanitizer,
    @Inject(LOCALE_ID) private locale: string
  ) { }
  
  ngOnInit() {
    this.id = this.params.snapshot.params['id'];
    this.id_tmdb = this.params.snapshot.params['tmdb_id'];
    this.getPelicula(this.id);
    this.getMovieTmdb(this.id_tmdb)
  }

  play(){
    this.loading = true
    this.playPortada = false
      setTimeout(() => {
          this.loading = false
          
      }, 2000);
    
  };

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
        this.imageBg= 'https://image.tmdb.org/t/p/original/'+this.movieTmdb.backdrop_path;

        this.rate = this.movieTmdb.vote_average;
        // this.locale = '1.0-0';
        this.titles_rating = ['Mala '+this.rate,
                              'Mediocre '+this.rate,
                              'Buena '+this.rate,
                              'Muy Buena '+this.rate,
                              'Excelente '+this.rate];
        this.value_display_rating = formatNumber(this.rate / 2, this.locale, '1.0-0');
        this.rate = formatNumber(this.rate, this.locale, '1.0-0');
        console.log(this.rate+' '+this.movieTmdb.vote_average);
      });
  }
}
