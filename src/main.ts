import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';




  // configura el enrutado para routes.ts
bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
    //  provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));
