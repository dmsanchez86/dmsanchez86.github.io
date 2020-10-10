import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioComponent } from './portafolio.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: PortafolioComponent },
  { path: ':id', component: DetailComponent },
];

@NgModule({
  declarations: [PortafolioComponent, DetailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
})
export class PortafolioModule {}
