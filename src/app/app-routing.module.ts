import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { ListPersonajesComponent } from './pages/list-personajes/list-personajes.component';
import { AddEditPersonajeComponent } from './pages/add-edit-personaje/add-edit-personaje.component';
import { LocalPersonajesComponent } from './pages/local-personajes/local-personajes.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NuevoComponent } from './heroes/nuevo/nuevo.component';
import { EditarComponent } from './heroes/editar/editar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'personajes', component: PersonajesComponent},
  { path: 'localizaciones', component: UbicacionComponent},
  { path: 'episodios', component: EpisodiosComponent},

  { path: 'list-personajes', component: ListPersonajesComponent},
  { path: 'personaje/:id/:fuente', component: AddEditPersonajeComponent},
  { path: '', redirectTo: '/local-personajes', pathMatch: 'full' },
  { path: 'local-personajes', component: LocalPersonajesComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'nuevo', component: NuevoComponent},
  {path:'editar/:_id', component: EditarComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
