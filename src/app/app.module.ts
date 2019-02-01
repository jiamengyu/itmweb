import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { ITMWebComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HighlightDirective } from './shared/directive/highlight.directive';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { UserService } from './shared/services/user.service';
import { Metric, AnalyticsImpl } from './shared/services/analytics.interface';
import { AnalyticsService } from './shared/services/analytics.service';
import { AUTH_PROVIDERS } from './shared/services/auth.service';
import { LoggedInGuard } from './shared/services/logged-in.guard';

@NgModule({
  declarations: [
    ITMWebComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    HomeComponent,
    DemoComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    {provide: UserService, useClass: UserService},
    {provide:'API_URL', useValue: 'https://www.itmercenaries.ca/api'},
    {
      provide: AnalyticsService,
      deps: [HttpClient, 'API_URL'],
      useFactory(http: HttpClient, apiUrl: string) {
        const loggingImpl: AnalyticsImpl ={
          recordEvent: (metric: Metric): void =>{
            console.log('The metric is:', metric);
            console.log('Sending to endpoint:', apiUrl );
          }
        };
        return new AnalyticsService(loggingImpl);
      }
    }
  ],
  bootstrap: [ITMWebComponent]
})
export class AppModule { 
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(fas, far);
  }
}
