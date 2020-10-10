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

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LogoComponent,
    NavigatorComponent,
    AtomLoaderComponent,
    PopupComponent,
    ToolsComponent,
    ProfileImageComponent,
    SocialNetworkingsComponent
  ],
  exports: [
    LogoComponent,
    NavigatorComponent,
    AtomLoaderComponent,
    PopupComponent,
    ToolsComponent,
    ProfileImageComponent,
    SocialNetworkingsComponent
  ],
})
export class ComponentsModule {}
