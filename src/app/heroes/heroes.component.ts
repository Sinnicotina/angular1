import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Heroe } from '../interfaces/heroe.interface';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
 
 
  
 
  
onScroll() {
throw new Error('Method not implemented.');
}

  heroes: Heroe[] = [];
hasMoreData: boolean=true;
scrollDistance: number =1;
scrollUpDistance: number =1;
  constructor(private HeroesService: HeroesService,private router:Router) {}

  ngOnInit() {
    this.llenarData();
  }

  async llenarData() {
    await this.HeroesService
    .getHeroes()
    .toPromise()
    .then((data:any)=>{
      this.heroes = data;
      console.log("Datos Recibidos del servicio:",this.heroes)
    });
  }

  EditarHeroe(_id: any){
    console.log(_id)
    this.router.navigate(['editar', _id]);
  }

  NuevoHeroe(){
    this.router.navigate(['nuevo']);
  }
   
  
  



  




  
}
