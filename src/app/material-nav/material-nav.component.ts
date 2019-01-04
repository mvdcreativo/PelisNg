import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeliculasService } from '../peliculas/peliculas.service';
import { Genre, MovieTmdb } from '../peliculas/pelicula';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'EM-material-nav',
  templateUrl: './material-nav.component.html',
  styleUrls: ['./material-nav.component.css']
})
export class MaterialNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  genres: any;
  generos: any;
  gPrincipales: Genre;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private movieService : PeliculasService,
    ) 
    {
     this.getGenres()
    }

  
  getGenres(){
    return this.movieService.getDataGenres$().subscribe(
      (datos)=>{
        this.genres = datos.data;
        // console.log(this.genres)

        this.gPrincipales = this.genres.filter(p => {
          if(p.id === 1 || p.id === 2 || p.id === 7 || p.id === 12 || p.id === 14 ){
            return true
          }
        })
        
      }
    )
  }


}
