import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { formatNumber } from '@angular/common';

import { PeliculasService } from '../peliculas.service';
import { Pelicula, MovieTmdb, Crew, Cast } from '../pelicula';
import { DirectiveNormalizer } from '@angular/compiler';



@Component({
  selector: 'EM-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id:number;
  pelicula: MovieTmdb ;
  urlOpenload: any ;
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
  rate:any;
  imageBg: string;
  value_display_rating: string;
  directors: Crew;
  
  panelOpenState = false;

  
  // public id:number;
  // public pelicula: Pelicula;
  // public urlOpenload ;
  // Openload: import("@angular/platform-browser/src/security/dom_sanitization_service").SafeResourceUrl;

  constructor(
    private params : ActivatedRoute,
    private movieService : PeliculasService,
    private sanitizer: DomSanitizer,
    @Inject(LOCALE_ID) private locale: string //// rate
  ) 
  { 

  }

  
  ngOnInit() {
    this.id_tmdb = this.params.snapshot.params['tmdb_id'];
    console.log(this.id_tmdb)
    this.getPelicula(this.id_tmdb)
    // console.log(this.pelicula)

  }

  play(){
    this.loading = true
    this.playPortada = false
      setTimeout(() => {
          this.loading = false
          
      }, 2000);
    
  };

  getPelicula(id){
   
    this.movieService.getPeliculaID$(id).subscribe(
      datos=>{
        this.pelicula = datos.data;
         console.log(this.pelicula)

          
          this.urlOpenload = 'https://openload.co/embed/'+this.pelicula.extid;
          this.Openload = this.sanitizer.bypassSecurityTrustResourceUrl( this.urlOpenload)
          // console.log(this.pelicula)
          this.directors = this.director(this.pelicula.credits.crew);
          this.cast = this.elencoPrincipal(this.pelicula.credits.casts);
          this.cast_image = 'https://image.tmdb.org/t/p/w154/';
          this.imagePatch = 'https://image.tmdb.org/t/p/w500/'+this.pelicula.poster_path;
          this.imageBg= 'https://image.tmdb.org/t/p/original/'+this.pelicula.backdrop_path;
  
          this.rate = this.pelicula.vote_average;
          // this.locale = '1.0-0';
          this.titles_rating = ['Mala '+this.rate,
                                'Mediocre '+this.rate,
                                'Buena '+this.rate,
                                'Muy Buena '+this.rate,
                                'Excelente '+this.rate];
          this.value_display_rating = formatNumber(this.rate / 2, this.locale, '1.0-0');
          this.rate = formatNumber(this.rate, this.locale, '1.0-0');
          // console.log(this.rate+' '+this.pelicula.vote_average);
        

      })
  }
 /////Director
  director(crew){
    let director = crew.filter(
      crew=>{
        return crew.job === 'Director';
      }
    );
    
    return director;

  }

   /////Elenco
   elencoPrincipal(cast){
    let elenco = cast.filter(
      cast=>{
        if(cast.order <= 6){
          return true;
        }
      }
    );
    
    return elenco;

  }

}
