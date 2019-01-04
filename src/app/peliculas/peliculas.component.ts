import { Component, OnInit, Input , OnDestroy} from '@angular/core';
import { PeliculasService } from './peliculas.service';
import { Pelicula, MovieTmdb, Genre, Links } from './pelicula';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'EM-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})




export class PeliculasComponent implements OnInit , OnDestroy{

@Input('genre') genreSlugParam : string;


  peliculas;
  tmb_id: any;
  movieTmdb: MovieTmdb;
  imagePatch: string = 'https://image.tmdb.org/t/p/w342';
  loading: boolean = false;

  searchText:string;
  searching: boolean = false;
  result: any;
  movies: any;
  dataMovieTmdb: MovieTmdb;
  moviesTmdb: MovieTmdb [];
  poster: string;
  routeGenre: any;
  slug: string = null;
  id: number;
  subsPeliculasG: any;
  cantResult: number;
  subsPeliculas: any;
  links: Links[];
  title: string;

  constructor(
    public peliculas_service: PeliculasService,
    private sanitizer: DomSanitizer,
    private route : ActivatedRoute,
    
  ) { }

  ngOnInit() {
    // console.log(this.route.params['value'].id)
    if(this.route.params['value'].id != undefined){
      // console.log('holaMundo')
      this.routeGenre = this.route.params.subscribe( 
        params => {
          this.slug = params['slug'];
          this.id= params['id']
          this.getMoviesByGenre(this.id);
        })      
    }else{
      this.getPeliculas();
    }

  }




///MUESTRA PELICULAS BD PROPIA
getPeliculas() {
  this.loading = true;

  this.subsPeliculas = this.peliculas_service.getPeliculas().subscribe(
    (datos: MovieTmdb)=> {
      
      this.loading = false;
      this.peliculas = datos.data;
      // this.links = datos.links;
      this.title = "Películas Recientes"
      console.log(this.links)
      this.peliculas = this.peliculas.sort(
        (a,b)=>{
          a = new Date(a.release_date)
          b = new Date(b.release_date)
          return b - a;
        });

    });

}
////LISTA DE PELICULA POR GENERO SLICITADO
getMoviesByGenre(id){
  this.loading = true;

  this.subsPeliculasG = this.peliculas_service.getMoviesByGenre$(id).subscribe(
    datos=> {
      this.loading = false;
      this.peliculas = datos.data.movies
      this.title = "Películas del Género " + datos.data.name;
      // console.log(this.peliculas)
      this.peliculas = this.peliculas.sort(
        (a,b)=>{
          a = new Date(a.release_date)
          b = new Date(b.release_date)
          return b - a;
        })

    });
}

////FILTRO POR TITULO
 showResults(){
   this.loading = true;
    if( this.searchText === undefined || this.searchText === ''){
      this.loading = false;
      return this.peliculas
      
    }
    
    // if(this.slug != null || this.searchText === undefined || this.searchText === ''  ){
      // return this.moviesTmdb.filter(
      //   (res:any) =>{
      //     res.forEach(genre => {
      //       if(genre.slug.toLowerCase().includes(this.slug.toLowerCase().trim())){
      //         this.loading = false;
      //         return true;
      //       }
      //     });
      //   })
    // }
    if(this.searchText !== undefined || this.searchText !== ''){
      return this.peliculas.filter(
        (res:any) =>{

          if(res.title.toLowerCase().includes(this.searchText.toLowerCase().trim()) || 
            res.release_date.toLowerCase().includes(this.searchText.toLowerCase().trim())
            // res.credits.cast.name.toLowerCase().includes(this.searchText.toLowerCase().trim()) ||
            // res.credits.crew.name.toLowerCase().includes(this.searchText.toLowerCase().trim())
            )
            {

            
            this.loading = false;
            return true
          }
         

          return false;
      });
    };


  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // if(this.routeGenre){
    //   this.subsPeliculasG.unsubscribe();
    //   this.subsPeliculas.unsubscribe();
    //   this.routeGenre.unsubscribe()
    // }
  }

}
