import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { StorageService } from 'src/app/services/storage.service';
import { HttpClient } from '@angular/common/http'; // Importar HttpClient para hacer solicitudes HTTP
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-personajes',
  templateUrl: './local-personajes.component.html',
  styleUrls: ['./local-personajes.component.css']
})
export class LocalPersonajesComponent implements OnInit {

  personajes: Personaje[] = [];
  personajeId: number = 0; // Variable para almacenar el ID del personaje a agregar

  constructor(private storage: StorageService, 
    private http: HttpClient,
    private router: Router,

  ) {}

  // Cargar personajes desde LocalStorage cuando se inicializa el componente
  ngOnInit(): void {
    this.personajes = this.storage.getPersonajesDelStorage();
  }

  // Función para cargar personajes actualizados desde el LocalStorage
  cargarPersonajes() {
    this.personajes = this.storage.getPersonajesDelStorage();
  }

  // Función para borrar un personaje del LocalStorage y actualizar la lista
  borrarPersonaje(personaje: Personaje) {
    this.storage.borrarPersonajeDelStorage(personaje); // Elimina del LocalStorage
    this.personajes = this.personajes.filter(p => p.id !== personaje.id); // Actualiza la lista local
  }

  // Nueva función para añadir un personaje a partir de su ID
  agregarPersonajePorId(): void {
    if (this.personajeId > 0) {
      const url = `https://rickandmortyapi.com/api/character/${this.personajeId}`; // URL de la API para obtener el personaje
      this.http.get<Personaje>(url).subscribe(
        (personaje) => {
          this.storage.setPersonajeEnStorage(personaje); // Guardar el personaje en el LocalStorage
          this.cargarPersonajes(); // Actualizar la lista de personajes locales
        },
        (error) => {
          console.error('Error al obtener el personaje:', error);
        }
      );
    } else {
      alert('Por favor, ingresa un ID válido.');
    }
  }

  editarPersonaje(unIdPersonaje:any){
    this.router.navigate(['/personaje',unIdPersonaje,'STORAGE']);

  }


}
