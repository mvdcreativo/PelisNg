import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations';

import { Pelicula, MovieTmdb } from '../../pelicula';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  selector: 'EM-list-peliculas',
  templateUrl: './list-peliculas.component.html',
  styleUrls: ['./list-peliculas.component.css'],
})
export class ListPeliculasComponent implements OnInit {

  peliculas: Pelicula[];
  movie: Pelicula;
  // showEdit: boolean = false;
  editRowID: any = '';
  public f : FormGroup;
  movieTmdb: MovieTmdb;
  fecha: string;




  constructor(
    private peliculas_service : PeliculasService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    
    this.f = this.formBuilder.group({
      tmdb_id: [null, Validators.required ],
      release_date: [null, Validators.required ]
    })
    this.getPeliculas();
  }


  getPeliculas() {

    this.peliculas_service.getPeliculasAll().subscribe(
      (datos:any)=> {
        this.peliculas = datos.data;
        
        this.dataSource = new MatTableDataSource(this.peliculas)
      });
  }

  getDatosTmdb(tmdb_id , id, index){

    this.peliculas_service.getDataMoviesTmdb(tmdb_id).subscribe(
      (datos:any)=> {
        this.movieTmdb = datos; 
        this.fecha = this.movieTmdb.release_date

        this.f.patchValue({    
          "release_date" : this.fecha
        }); 

        this.updateBd(id,index)
      });



  }

  editMovie(val){
    this.editRowID = val;
    // this.f.controls.tmdb_id
    console.log(this.f.controls.tmdb_id.value);
    
  }


  procesoActualizar(id, index){
  var tmdb_id = this.f.controls.tmdb_id.value;

    this.getDatosTmdb(tmdb_id , id, index)

      // console.log(this.f.value);

  }

  updateBd(id, index){
    // console.log(this.f.value)

    if (this.f.valid) {
      //   this.f.controls.release_date.patchValue = this.peliculas[index].release_date;
  
        return this.peliculas_service.updateIdTmdb$(this.f.value, id).subscribe(
          data => {
            this.movie = data;
            this.peliculas[index].tmdb_id = this.movie.tmdb_id;
            this.peliculas[index].release_date = this.movie.release_date;
  
            // this.getPeliculas();
            this.editRowID = '';
            this.f.reset();
  
            // console.log(this.movies);
  
          },
          err => console.error('Ops: ' + err.message))
      }else{
        this.editRowID = '';
        this.f.reset();
      }
  }

  displayedColumns: string[] = ['id', 'title', 'release_date' , 'tmdb_id', 'image'];
  dataSource ;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

