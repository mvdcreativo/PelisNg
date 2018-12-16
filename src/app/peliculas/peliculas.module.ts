import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PeliculasComponent } from './peliculas.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { PeliculaListItemComponent } from './pelicula-list-item/pelicula-list-item.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';


const routes: Routes = [
  {
    path: 'detalle/:tmdb_id',
    component: DetalleComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AdminModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
    })
  ],
  declarations: [
    PeliculasComponent,
    DetalleComponent,
    PeliculaListItemComponent
  ],
  exports: [
    PeliculasComponent,
  ]
})
export class PeliculasModule { }
