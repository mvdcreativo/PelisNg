import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../../pelicula';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(
    private http : HttpClient
  ) { }

  
  updateIdTmdb$(movie:Pelicula, id): Observable<any>{
    return this.http.put(environment.urlApi+`/${id}`, movie);
  }
}
