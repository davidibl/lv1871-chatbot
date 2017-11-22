import { ALL_SERVICES } from './services/services';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ALL_COMPONENTS } from './components/componens';
import { routing } from './app.routes';
import { DataService } from './services/dataService';
import { InitService } from './services/initService';

export function startupServiceFactory(startupService: InitService): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ...ALL_COMPONENTS,
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, RouterModule, routing,
  ],
  providers: [
    ALL_SERVICES,
    InitService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [InitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
