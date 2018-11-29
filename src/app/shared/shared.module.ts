import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MaterialModule } from './material/material.module';
// FlexLayaut
import { FlexLayoutModule } from '@angular/flex-layout';
import { FiltroPipe } from './pipes/filtro.pipe';


@NgModule({
  declarations: [
    FiltroPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FiltroPipe
  ]
})
export class SharedModule { }
