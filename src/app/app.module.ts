import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListPersonajesComponent } from './pages/list-personajes/list-personajes.component';
import { AddEditPersonajeComponent } from './pages/add-edit-personaje/add-edit-personaje.component';
import { FormsModule } from '@angular/forms';
import { LocalPersonajesComponent } from './pages/local-personajes/local-personajes.component';

import { HeroesComponent } from './heroes/heroes.component';
import { NuevoComponent } from './heroes/nuevo/nuevo.component';
import { EditarComponent } from './heroes/editar/editar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonajesComponent,
    NavbarComponent,
    UbicacionComponent,
    EpisodiosComponent,
    ListPersonajesComponent,
    AddEditPersonajeComponent,
    LocalPersonajesComponent,
 
    HeroesComponent,
      NuevoComponent,
      EditarComponent,
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,

    HttpClientModule,

    //Aqui involucramos el Forms Module
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
