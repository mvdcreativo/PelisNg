import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: 'admin/peliculas/add/:id',
    component: AddComponent
  },

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AddComponent
  ]
})
export class AdminModule { }
