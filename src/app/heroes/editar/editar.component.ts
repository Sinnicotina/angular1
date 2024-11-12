import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { heroeedit } from '../../interfaces/heroeedit.interface';
import { HeroesService } from '../heroes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  



  constructor(private activaterouter: ActivatedRoute, private router: Router, private heroe: HeroesService) { }

   datosheroe: heroeedit | undefined;
  
  editarForm = new FormGroup({
    
    nombre: new FormControl(''),
    bio: new FormControl(''),
    img: new FormControl(''),
    aparicion: new FormControl(''),
    casa: new FormControl(''), 
    _id: new FormControl(''),  
  });


 

  ngOnInit(): void {
    
    let heroeid = this.activaterouter.snapshot.paramMap.get('_id');
    
    console.log(heroeid);
    this.heroe.getsingleheroe(heroeid).subscribe(data=>{
      this.datosheroe=data;resp:
      console.log(this.datosheroe);
      this.editarForm.setValue({
  
      "nombre": this.datosheroe.nombre,
      "bio": this.datosheroe.bio,
      "img": this.datosheroe.img,
      "aparicion": this.datosheroe.aparicion,
      "casa": this.datosheroe.casa,
      "_id": heroeid
      });

      console.log(this.editarForm.value);
    })

  }
  



  
} 
