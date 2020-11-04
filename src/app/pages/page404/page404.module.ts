import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page404Component } from './page404.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  { path: '', component: Page404Component }
];

@NgModule({
  declarations: [Page404Component],
  imports: [ 
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class Page404Module { }
