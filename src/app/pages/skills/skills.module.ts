import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './skills.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [SkillsComponent, DetailComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ComponentsModule
  ],
  exports: [DetailComponent]
})
export class SkillsModule { }
