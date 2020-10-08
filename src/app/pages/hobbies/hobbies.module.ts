import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbiesComponent } from './hobbies.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [{
  path: '', component: HobbiesComponent
}]

@NgModule({
  declarations: [HobbiesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
})
export class HobbiesModule {}
