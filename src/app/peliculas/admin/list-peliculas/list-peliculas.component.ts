import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../peliculas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations';

import { Pelicula } from '../../pelicula';
import { MatTableDataSource } from '@angular/material';

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




  constructor(
    private peliculas_service : PeliculasService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.getPeliculas();

    this.f = this.formBuilder.group({
      tmdb_id: [null, Validators.required ]
    })
  }


  getPeliculas() {

    this.peliculas_service.getPeliculas().subscribe(
      (datos:any)=> {
        this.peliculas = datos.data;
        
        this.dataSource = new MatTableDataSource(this.peliculas)
        console.log(this.dataSource.data)
      });
  }



  editMovie(val){
    this.editRowID = val;
    // this.f.controls.tmdb_id
    console.log(this.f.controls.tmdb_id);
    
  }


  updateTmdb(id, index){
    if (this.f.valid) {
      return this.peliculas_service.updateIdTmdb$(this.f.value, id).subscribe(
        data => {
          this.movie = data;
          this.peliculas[index].tmdb_id = this.movie.tmdb_id;
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

  displayedColumns: string[] = ['id', 'title', 'tmdb_id', 'image'];
  dataSource ;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

