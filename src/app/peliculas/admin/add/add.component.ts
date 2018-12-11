import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../../peliculas.service';
import { Pelicula, MovieTmdb } from '../../pelicula';


@Component({
  selector: 'EM-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public f : FormGroup;
  public movies: Pelicula;
  public movie: Pelicula;
  public movieTmdb: MovieTmdb;

  public id;
  imagePatch: string;

  constructor(
    private formBuilder: FormBuilder,
    private movieService : PeliculasService,
    private params : ActivatedRoute,

  ) { }

  ngOnInit() {
    this.id = this.params.snapshot.params['id'];
    this.getPelicula();

    this.f = this.formBuilder.group({
      tmdb_id: [null]
    })
  }

  onSubmit(){
    this.updateTmdb(this.f.value, this.id)
  }

  updateTmdb(id_tmdb, id){
    return this.movieService.updateIdTmdb$(id_tmdb, id).subscribe(
      data => {
        this.movies = data;
        console.log(id_tmdb);
        this.getMovieTmdb(id_tmdb);
      },
      err => console.error('Ops: ' + err.message))
  }

  getPelicula(){
   
    this.movieService.getPeliculaID(this.id).subscribe(
      (datos:Pelicula)=>{
        this.movie = datos.data;
      })
  }

  getMovieTmdb(tmdb_id){
    // console.log(tmdb_id)
    this.movieService.getDataMoviesTmdb(tmdb_id.tmdb_id).subscribe(
      (datos:MovieTmdb)=>{
        this.movieTmdb = datos;
        console.log(this.movieTmdb)
        this.imagePatch = 'https://image.tmdb.org/t/p/w342/'+this.movieTmdb.poster_path;

        // this.movie.title = this.movieTmdb.title;
        // this.movie.title_origin = this.movieTmdb.original_title;
        // this.movie.description = this.movieTmdb.overview;
        // this.movie.ano = this.movieTmdb.release_date;
        // this.movie.duration = this.movieTmdb.runtime;
        // this.movie.image = this.imagePatch;
        // this.movie.state = 4;
        // this.movie.tmdb_id = this.movieTmdb.id;
        // this.movie.imdb_id = this.movieTmdb.imdb_id;
        // this.movie.rating_tmdb = this.movieTmdb.vote_average;
        // this.movie.release_date = this.movieTmdb.release_date;
        // this.movie.budget = this.movieTmdb.budget;
        // this.movie.revenue = this.movieTmdb.revenue;
        
        console.log(this.movieTmdb)


      })  
  }

}
