import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasComponent } from './peliculas.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  {
    path: 'detalle/:id',
    component: DetalleComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AdminModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PeliculasComponent,
    DetalleComponent
  ],
  exports: [
    PeliculasComponent
  ]
})
export class PeliculasModule { }
