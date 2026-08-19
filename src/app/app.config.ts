import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FeatherModule } from 'angular-feather';
import { icons } from './shared/icons/icons';
import { MenuDataService } from './_layout/authorized/data.menu';
import { ConfigService } from './shared/config.service';
import { NotificationsService } from './shared/notifications/notifications.service';
import { NotificationsAlertService } from './shared/services/notifications-alert.service';
import { LoadingService } from './shared/loading/loading.service';
import { DatatablesTwoService } from './shared/datatables/services/datatables-two.service';
import { InterceptorService } from './shared/services/interceptor.service';
import localeEsAr from '@angular/common/locales/es-AR';
import localeEs419 from '@angular/common/locales/es-419';

export function init(config: ConfigService) {
  registerLocaleData(localeEsAr, 'es-AR');
  registerLocaleData(localeEs419, 'es-419');
  return () => config.load();
}

export function getLocale(configService: ConfigService) {
  return {
    useValue: configService.getLocale()
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    MenuDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [ConfigService],
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useFactory: getLocale,
      deps: [ConfigService],
    },
    ConfigService,
    NotificationsService,
    NotificationsAlertService,
    DatatablesTwoService,
    LoadingService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    importProvidersFrom(FeatherModule.pick(icons)),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
