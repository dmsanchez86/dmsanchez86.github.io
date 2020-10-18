import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { reducers } from './store/reducers';
import { ComponentsModule } from './components/components.module';
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';

import { intersectionObserverPreset, LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    ComponentsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    LazyLoadImageModule.forRoot({ preset: intersectionObserverPreset })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
