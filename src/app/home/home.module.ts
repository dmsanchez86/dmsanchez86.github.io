import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AtomLoaderComponent } from '../atom-loader/atom-loader.component';


@NgModule({
  declarations: [HomeComponent, AtomLoaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
