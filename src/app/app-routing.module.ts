import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'portafolio', loadChildren: () => import('./pages/portafolio/portafolio.module').then(m => m.PortafolioModule) },
  { path: 'projects', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'hobbies', loadChildren: () => import('./pages/hobbies/hobbies.module').then(m => m.HobbiesModule) },
  { path: '404', loadChildren: () => import('./pages/page404/page404.module').then(m => m.Page404Module) },
  { path: 'skills', loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsModule) },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
