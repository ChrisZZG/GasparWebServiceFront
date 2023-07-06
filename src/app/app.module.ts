import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { HeroComponent } from './Componentes/hero/hero.component';
import { AboutusComponent } from './Componentes/aboutus/aboutus.component';
import { BiographyComponent } from './Componentes/biography/biography.component';
import { ProyectsComponent } from './Componentes/proyects/proyects.component';
import { ContactComponent } from './Componentes/contact/contact.component';
import { CopyrightComponent } from './Componentes/copyright/copyright.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { EditcontactinfoComponent } from './Componentes/contact/editcontactinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutusComponent,
    BiographyComponent,
    ProyectsComponent,
    ContactComponent,
    CopyrightComponent,
    LoginComponent,
    HomeComponent,
    EditcontactinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
