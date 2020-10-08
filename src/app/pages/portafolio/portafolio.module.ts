import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioComponent } from './portafolio.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [{
  path: '', component: PortafolioComponent
}]

@NgModule({
  declarations: [PortafolioComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
})
export class PortafolioModule {}
