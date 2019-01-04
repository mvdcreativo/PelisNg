import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { MovieTmdb } from '../pelicula';

@Component({
  selector: 'EM-pelicula-list-item',
  templateUrl: './pelicula-list-item.component.html',
  styleUrls: ['./pelicula-list-item.component.css']
})
export class PeliculaListItemComponent implements OnInit {
 
  @Input('tmbd') movieTmdb : MovieTmdb[];

  imagePatch: string = 'https://image.tmdb.org/t/p/w342';;
  
  constructor(
  ) { }


  ngOnInit() {

  }

}
