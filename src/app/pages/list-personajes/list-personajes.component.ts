import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Character, RickyMortyDbService } from 'src/app/services/ricky-morty-db.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.css']
})
export class ListPersonajesComponent {

  personajes: Character[] = [];

  page: number = 1; // Página actual para las solicitudes
  hasMoreData: boolean = true; // Indica si hay más datos para cargar

  // Configuración del Infinite Scroll
  scrollDistance = 1; // Porcentaje de la distancia desde el fondo al que se activa el evento (0 a 1)
  scrollUpDistance = 1; // Porcentaje de la distancia desde el inicio al que se activa el evento al hacer scroll hacia arriba (0 a 1)



  constructor(
    private dataBD: RickyMortyDbService,
    private router: Router,
    private storage: StorageService
  ) {
    
  }

  ngOnInit(){
    this.cargarPersonajesBD1();
  }

  async cargarPersonajesBD() {
    await this.dataBD
    .getRMCharacters()
    .toPromise()
    .then((data:any) =>{
      this.personajes = data;
      console.log("PERSONAJES",this.personajes)
    });
  }

 cargarPersonajesBD1() {
    if (this.hasMoreData) {
      this.dataBD.getRMCharacters1(this.page).subscribe({
        next: (data: any) => {
          if (data.results && data.results.length > 0) {
            this.personajes = [...this.personajes, ...data.results]; // Añadimos los personajes a la lista existente
            this.page++; // Incrementamos el número de página para la siguiente solicitud
          } else {
            this.hasMoreData = false; // No hay más datos que cargar
          }
        },
        error: (error: unknown) => {
          console.error('Error al cargar personajes:', error);
          this.hasMoreData = false;
        }
      });
    }
  }

  onScroll() {
    if (this.hasMoreData) {
      this.cargarPersonajesBD1(); // Llamar cuando se hace scroll para cargar más datos
    }
  }

  editarPersonaje(unIdPersonaje:number){
    this.router.navigate(['/personaje',unIdPersonaje,'API']);

  }

  guardar(unPersonaje:any) {
    this.storage.setPersonajeEnStorage(unPersonaje);
    console.log('Información guardada en el Local Storage');
  }

}
