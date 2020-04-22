import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CvitaeComponent } from './body/cvitae/cvitae.component';
import { ProyectsComponent } from './body/proyects/proyects.component';
import { FootpageComponent } from './footer/footpage/footpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CvitaeComponent,
    ProyectsComponent,
    FootpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
