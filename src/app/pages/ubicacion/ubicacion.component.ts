import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RickyMortyDbService } from 'src/app/services/ricky-morty-db.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent {

 locations:any;

  constructor(
    private dataBD: RickyMortyDbService,
    private router: Router,
  ) {
    
  }

  ngOnInit(){
    this.cargarLocalizacionesBD();
  }

  async cargarLocalizacionesBD() {
    await this.dataBD
    .getRMLocations()
    .toPromise()
    .then((data:any) =>{
      this.locations = data;
      console.log("LOCATIONS",this.locations)
    });
  }

}