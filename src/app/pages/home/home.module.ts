import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AtomLoaderComponent } from 'src/app/components/atom-loader/atom-loader.component';
import { NavigatorComponent } from 'src/app/components/navigator/navigator.component';
import { PreviewComponent } from 'src/app/components/preview/preview.component';
import { PopupComponent } from 'src/app/components/popup/popup.component';


@NgModule({
  declarations: [HomeComponent, AtomLoaderComponent, NavigatorComponent, PreviewComponent, PopupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
