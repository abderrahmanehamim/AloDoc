import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { AppModule } from './app/app.module';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  bootstrapApplication(AppModule,
    {
      providers: [
        provideProtractorTestingSupport(),
        provideRouter(routeConfig)
      ]
    }
  ).catch(err => console.error(err));