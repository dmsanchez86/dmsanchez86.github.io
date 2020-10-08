import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioComponent } from './portafolio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: PortafolioComponent
}]

@NgModule({
  declarations: [PortafolioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class PortafolioModule {}
