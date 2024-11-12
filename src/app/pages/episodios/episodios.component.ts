import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RickyMortyDbService } from 'src/app/services/ricky-morty-db.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent {

  episodios:any;

  constructor(
    private dataBD: RickyMortyDbService,
    private router: Router,
  ) {
    
  }

  ngOnInit(){
    this.cargarEpisodiosBD();
  }

  async cargarEpisodiosBD() {
    await this.dataBD
    .getRMEpisodes()
    .toPromise()
    .then((data:any) =>{
      this.episodios = data;
      console.log("EPISODIOS",this.episodios)

      this.filtarPersonajes(this.episodios[0].characters);
    });
  }

  filtarPersonajes(characters:any):string {
    let cadena:string = '';
    for (let i=0;i<characters.length;i++){
      let dato = characters[i];
      let misDatos = dato.split('/');
      //console.log(misDatos);
      cadena = cadena + misDatos[misDatos.length - 1] + ','
    }
     console.log(cadena);

    return '';
  }

}
