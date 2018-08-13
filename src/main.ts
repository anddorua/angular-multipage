import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { FirstFeatureModule } from './app/first-feature/first-feature.module';
import { SecondFeatureModule } from './app/second-feature/second-feature.module';

if (environment.production) {
  enableProdMode();
}

/* platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err)); */
if (document.querySelector('app-for-audio')) {
  console.log('app-for-audio init');
  platformBrowserDynamic().bootstrapModule(FirstFeatureModule)
    .catch(err => console.log(err));
}
if (document.querySelector('app-for-video')) {
  console.log('app-for-video init');
  platformBrowserDynamic().bootstrapModule(SecondFeatureModule)
    .catch(err => console.log(err));
}

