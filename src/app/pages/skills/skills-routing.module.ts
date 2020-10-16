import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

import { SkillsComponent } from './skills.component';

const routes: Routes = [
  { path: '', component: SkillsComponent },
  { path: 'detail/:slug', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
