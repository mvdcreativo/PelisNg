import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPeliculasComponent } from './list-peliculas/list-peliculas.component';


const routes: Routes = [
  {
    path: 'admin/peliculas/add/:id',
    component: AddComponent
  },
  {
    path: 'admin/peliculas',
    component: ListPeliculasComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AddComponent,
    ListPeliculasComponent
  ]
})
export class AdminModule { }
