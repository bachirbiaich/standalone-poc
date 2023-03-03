import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from 'src/environments/environment';
import { AppStandaloneModule } from "mock/standalone/override/app-standalone.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppStandaloneModule)
  .catch(err => console.error(err));
