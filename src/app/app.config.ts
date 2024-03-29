import { ApplicationConfig } from '@angular/core';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { RealtorService } from './services/realtor.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),
    
    provideClientHydration(),
    provideHttpClient(withFetch())
    ],
    
};


