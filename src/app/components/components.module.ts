import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AtomLoaderComponent } from './atom-loader/atom-loader.component';
import { PopupComponent } from './popup/popup.component';
import { PreviewComponent } from './preview/preview.component';
import { ToolsComponent } from './tools/tools.component';
import { RouterModule } from '@angular/router';
import { ProfileImageComponent } from './profile-image/profile-image.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LogoComponent,
    NavigatorComponent,
    AtomLoaderComponent,
    PopupComponent,
    PreviewComponent,
    ToolsComponent,
    ProfileImageComponent
  ],
  exports: [
    LogoComponent,
    NavigatorComponent,
    AtomLoaderComponent,
    PopupComponent,
    PreviewComponent,
    ToolsComponent,
    ProfileImageComponent
  ],
})
export class ComponentsModule {}
