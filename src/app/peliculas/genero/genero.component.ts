import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { Pelicula, MovieTmdb } from '../pelicula';
import { SafeUrl } from '@angular/platform-browser/src/platform-browser';


@Component({
  selector: 'EM-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  routeGenre: any;
  slug: any;
  peliculas;
  moviesTmdb: MovieTmdb [];
  dataMovieTmdb: MovieTmdb;
  imagePatch: any;
  loading: boolean;
  searchText: any;

  constructor(
    private route : ActivatedRoute,
    private peliculas_service: PeliculasService
  ) { }

  ngOnInit() {
    this.routeGenre = this.route.params.subscribe( 
                    params => {
                      this.slug = params['slug'];
                    })
                    

  }




  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.routeGenre.unsubscribe();
  }

}
