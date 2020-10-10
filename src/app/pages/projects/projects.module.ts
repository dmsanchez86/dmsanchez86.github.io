import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':id', component: DetailComponent }
]

@NgModule({
  declarations: [ProjectsComponent, DetailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
})
export class ProjectsModule {}
