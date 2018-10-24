import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'EM-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public id:number;
  public pelicula: Pelicula;

  constructor(
    private params : ActivatedRoute,
    private peliculas_service : PeliculasService
  ) { }
  
  ngOnInit() {
    this.id = this.params.snapshot.params['id'];
    this.getPelicula();
  }


  getPelicula(){
    this.peliculas_service.getPeliculaID(this.id).subscribe(
      (datos:Pelicula)=>
        this.pelicula = datos.data
    )
  }

}
