import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { Pelicula } from '../pelicula';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'EM-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public id:number;
  public pelicula: Pelicula;
  public urlOpenload ;
  Openload: import("@angular/platform-browser/src/security/dom_sanitization_service").SafeResourceUrl;

  constructor(
    private params : ActivatedRoute,
    private movieService : PeliculasService,
    private sanitizer: DomSanitizer
  ) { }
  
  ngOnInit() {
    this.id = this.params.snapshot.params['id'];
    this.getPelicula();
  }


  getPelicula(){
   
    this.movieService.getPeliculaID(this.id).subscribe(
      (datos:Pelicula)=>{
        this.pelicula = datos.data;
        this.urlOpenload = 'https://openload.co/embed/'+this.pelicula.extid;
        this.Openload = this.sanitizer.bypassSecurityTrustResourceUrl( this.urlOpenload)

      })
  }

}
