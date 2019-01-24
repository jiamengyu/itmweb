import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ITMWebComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HighlightDirective } from './shared/directive/highlight.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ITMWebComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ITMWebComponent]
})
export class AppModule { }
