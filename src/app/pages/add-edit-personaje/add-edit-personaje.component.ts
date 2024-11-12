import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { RickyMortyDbService } from 'src/app/services/ricky-morty-db.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-edit-personaje',
  templateUrl: './add-edit-personaje.component.html',
  styleUrls: ['./add-edit-personaje.component.css'],
})
export class AddEditPersonajeComponent implements OnInit {
  unPersonajeId: number | null = null;
  unaFuente: string = 'API';
  unPersonaje: Personaje = {
    id: -1,
    name: '',
    gender: '',
    species: '',
    status: '',
    image: '',
  };

  constructor(
    private dataBD: RickyMortyDbService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      const fuente = params.get('fuente');

      if (fuente !== null) {
        this.unaFuente = fuente;
      }

      if (id !== null) {
        this.unPersonajeId = +id;
        //this.cargarPersonaje();
      }

      console.log('ID', this.unPersonajeId, 'FUENTE', this.unaFuente);

      this.cargarPersonaje();
    });
  }

  cargarPersonaje() {
    if (this.unPersonajeId !== null) {
      if (this.unaFuente == 'API') {
        this.cargarPersonajeBD();
      } else {
        const personajeStorage = this.storage.getPersonajeDelStorage(
          this.unPersonajeId
        );
        if (personajeStorage) {
          this.unPersonaje = personajeStorage;
        }
      }
    }
  }

  async cargarPersonajeBD() {
    if (this.unPersonajeId !== null) {
      try {
        const data: any = await this.dataBD
          .getRMCharactersById(this.unPersonajeId)
          .toPromise();
        this.unPersonaje = {
          id: data.id,
          name: data.name,
          gender: data.gender,
          species: data.species,
          status: data.status,
          image: data.image,
        };
      } catch (error) {
        console.error('Error al cargar el personaje:', error);
      }
    }
  }

  guardar() {
    this.storage.setPersonajeEnStorage(this.unPersonaje);
    console.log('Información guardada en el Local Storage');

    if (this.unaFuente == 'API') {
      this.router.navigate(['/list-personajes']);
    } else {
      this.router.navigate(['/local-personajes']);
    }
  }
}
