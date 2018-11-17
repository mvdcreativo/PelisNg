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
        console.log(this.movies);
        this.getMovieTmdb(this.movies.tmdb_id);
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
    this.movieService.getDataMoviesTmdb(tmdb_id).subscribe(
      (datos:MovieTmdb)=>{
        this.movieTmdb = datos;

        this.imagePatch = 'https://image.tmdb.org/t/p/w342/'+this.movieTmdb.poster_path;

        console.log(this.movieTmdb)


      })  
  }

}
