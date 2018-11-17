import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'detalle/:id',
    loadChildren: './peliculas/peliculas.module#PeliculasModule'
  },
  {
    path: 'admin/peliculas/add/:id',
    loadChildren: './peliculas/admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
