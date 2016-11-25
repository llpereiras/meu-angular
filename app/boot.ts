import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './config/module';

import {enableProdMode} from '@angular/core';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
