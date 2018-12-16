import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from './peliculas.service';
import { Pelicula, MovieTmdb } from './pelicula';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'EM-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})




export class PeliculasComponent implements OnInit {

@Input() genreId : number;


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

  constructor(
    public peliculas_service: PeliculasService,
    private sanitizer: DomSanitizer,

    
  ) { }

  ngOnInit() {
    
    this.getPeliculas();
  }

///MUESTRA PELICULAS BD PROPIA
getPeliculas() {
  // this.loading = true;

  this.peliculas_service.getPeliculas().subscribe(
    (datos: Pelicula)=> {
      this.peliculas = datos.data;
      this.moviesTmdb = this.peliculas.sort(
        (a,b)=>{
          a = new Date(a.release_date)
          b = new Date(b.release_date)
          return b - a;
        }
      )

      this.moviesTmdb = this.getMoviesTmdb()

      // console.log(this.moviesTmdb)
    });

}
////FILTRO POR TITULO
 showResults(){
  //  this.loading = true;
    if(this.moviesTmdb.length === 0 || this.searchText === undefined || this.searchText === ''){
      this.loading = false;
      return this.moviesTmdb
      
    }

    return this.moviesTmdb.filter(
      (res:any) =>{
        if(res.title.toLowerCase().includes(this.searchText.toLowerCase().trim()) || 
          res.release_date.toLowerCase().includes(this.searchText.toLowerCase().trim())
          // res.credits.cast.name.toLowerCase().includes(this.searchText.toLowerCase().trim()) ||
          // res.credits.crew.name.toLowerCase().includes(this.searchText.toLowerCase().trim())
          )
          {

          this.loading = false;
          return true;
        }

        return false;
    });
  }


  ////DATOS DE TMDB
  getMoviesTmdb(){
    
    let peliculasTmdb = [];

    this.peliculas.forEach(element => {


      
      return this.peliculas_service.getDataMoviesTmdb(element.tmdb_id).subscribe(
        (datos:MovieTmdb)=>{
          
          this.dataMovieTmdb = datos;
          let safeUrl = this.imagePatch + this.dataMovieTmdb.poster_path;
          this.dataMovieTmdb['poster_path'] = safeUrl
          peliculasTmdb.push(this.dataMovieTmdb);  
          // this.loading = false;
          
        });

    });
    return peliculasTmdb;
  }

}
