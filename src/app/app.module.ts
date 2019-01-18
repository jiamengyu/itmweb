import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ITMWebComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HighlightDirective } from './shared/directive/highlight.directive'
import { SharedModule} from './shared';
//import { AuthModule } from './core/authentication/auth.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
//import {} from './core/services';

@NgModule({
  declarations: [
    ITMWebComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ITMWebComponent]
})
export class AppModule { }
