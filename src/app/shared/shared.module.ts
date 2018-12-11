import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MaterialModule } from './material/material.module';
/////////////
// FlexLayaut
import { FlexLayoutModule } from '@angular/flex-layout';
import { FiltroPipe } from './pipes/filtro.pipe';
/////////////
// barra de progreso circular
import { NgCircleProgressModule } from 'ng-circle-progress';
//////////////
// Rating bar
import { BarRatingModule } from "ngx-bar-rating";
/////////////
// Videogular
// import {VgCoreModule} from 'videogular2/core';
// import {VgControlsModule} from 'videogular2/controls';
// import {VgOverlayPlayModule} from 'videogular2/overlay-play';
// import {VgBufferingModule} from 'videogular2/buffering';
// Loading ngx
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { SearchPipe } from './pipes/search.pipe';
////////////


@NgModule({
  declarations: [
    FiltroPipe,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    BarRatingModule,
    // VgCoreModule,
    // VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule,


    // NgCircleProgressModule.forRoot({
    //   // set defaults here
    //   radius: 100,
    //   outerStrokeWidth: 16,
    //   innerStrokeWidth: 8,
    //   outerStrokeColor: "#78C000",
    //   innerStrokeColor: "#C7E596",
    //   animationDuration: 300,
      
    // })
    
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FiltroPipe,
    SearchPipe,
    BarRatingModule,
    // VgCoreModule,
    // VgControlsModule,
    // VgOverlayPlayModule,
    // VgBufferingModule,

    // NgCircleProgressModule

  ]
})
export class SharedModule { }
