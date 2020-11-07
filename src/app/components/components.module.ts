import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AtomLoaderComponent } from './atom-loader/atom-loader.component';
import { PopupComponent } from './popup/popup.component';
import { ToolsComponent } from './tools/tools.component';
import { RouterModule } from '@angular/router';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { SocialNetworkingsComponent } from './social-networkings/social-networkings.component';
import { PreviewComponent } from './preview/preview.component';
import { LanguageContentComponent } from './language-content/language-content.component';
import { TwitterContentComponent } from './twitter-content/twitter-content.component';
import { ItemProjectComponent } from './item-project/item-project.component';
import { SkillsContentComponent } from './skills-content/skills-content.component';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { NumberIncrementComponent } from './number-increment/number-increment.component';

const globalComponents = [
  LogoComponent,
  NavigatorComponent,
  AtomLoaderComponent,
  PopupComponent,
  ToolsComponent,
  ProfileImageComponent,
  SocialNetworkingsComponent,
  PreviewComponent,
  LanguageContentComponent,
  TwitterContentComponent,
  ItemProjectComponent,
  SkillsContentComponent,
  NumberIncrementComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LazyLoadImageModule.forRoot({ preset: intersectionObserverPreset })
  ],
  declarations: globalComponents,
  exports: globalComponents,
})
export class ComponentsModule {}
