import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PeliculasModule } from '../peliculas/peliculas.module';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    PeliculasModule,

  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
