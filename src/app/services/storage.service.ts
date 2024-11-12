import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  personajes: Personaje[] = [];

  constructor() {
    this.personajes = this.getPersonajesDelStorage();
  }

  setPersonajeEnStorage(unPersonaje: Personaje) {
    this.borrarPersonajeDelStorage(unPersonaje);
    this.personajes = [unPersonaje, ...this.personajes];
    localStorage.setItem('personajes', JSON.stringify(this.personajes));
  }

  getPersonajesDelStorage(): Personaje[] {
    const item = localStorage.getItem('personajes');
    return item ? JSON.parse(item) : [];
  }

  getPersonajeDelStorage(id: number): Personaje | undefined {
    return this.personajes.find(personaje => personaje.id === id);
  }

  borrarPersonajeDelStorage(unPersonaje: Personaje) {
    this.personajes = this.personajes.filter(localPersonaje => localPersonaje.id !== unPersonaje.id);
    
    // Actualizar LocalStorage con la lista filtrada
    localStorage.setItem('personajes', JSON.stringify(this.personajes));
  }

  borrarPersonaje(personaje: Personaje) {
    this.borrarPersonajeDelStorage(personaje); 
    this.personajes = this.personajes.filter(p => p.id !== personaje.id);
    localStorage.setItem('personajes', JSON.stringify(this.personajes)); // Guarda los cambios
  }
  
}