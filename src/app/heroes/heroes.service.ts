import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { heroeedit } from '../interfaces/heroeedit.interface';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';

export interface ApiResponse<T> {
  resp: T[];
  // Añade más propiedades si la API devuelve más datos
}


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  url: string=`${URL_SERVICIOS_MONGODB}/heroes`;
  getHeroe(id: any) {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) { }

  getHeroes(): any {
    let url = `${URL_SERVICIOS_MONGODB}/heroes`;
    return this.http.get(url).pipe(
      map((data: any) => {
        console.log('Datos', data);
        return data.resp;
      })
    );
  }


  getsingleheroe(_id:any):Observable<heroeedit>{
    let direccion=this.url+"/"+_id;
    return this.http.get<heroeedit>(direccion);
  }
  


  crud_Heroes(unHeroe: Heroe, unaAccion: string): any {
    //console.log(unExpediente);


    if (unaAccion === 'eliminar') {
      let parametros2 = new HttpParams();


      let url = `${URL_SERVICIOS_MONGODB}/heroes/${unHeroe._id}`;


      return this.http.delete(url).pipe(
        map((data) => {
          return data;
        })
      );
    }


    /*
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    _id?: string;
    */
    if (unaAccion === 'insertar') {
      let parametros2 = new HttpParams();
      let url = URL_SERVICIOS_MONGODB + '/heroes';


      // Begin assigning parameters
      parametros2 = parametros2.append('nombre', unHeroe.nombre);
      parametros2 = parametros2.append('bio', unHeroe.bio);
      parametros2 = parametros2.append('img', unHeroe.img);
      parametros2 = parametros2.append('aparicion', unHeroe.aparicion);
      parametros2 = parametros2.append('casa', unHeroe.casa);


      const body = {
        nombre: unHeroe.nombre,
        bio: unHeroe.bio,
        img: unHeroe.img,
        aparicion: unHeroe.aparicion,
        casa: unHeroe.casa,
      };


      return this.http.post(url, body).pipe(map((data) => data));
    }


    if (unaAccion === 'modificar') {
      let parametros = new HttpParams();


      let url = `${URL_SERVICIOS_MONGODB}/heroes/${unHeroe._id}`;


      //let url = URL_SERVICIOS_MONGODB + '/heroes';


      // Begin assigning parameters
      parametros = parametros.append('nombre', unHeroe.nombre);
      parametros = parametros.append('bio', unHeroe.bio);
      parametros = parametros.append('img', unHeroe.img);
      parametros = parametros.append('aparicion', unHeroe.aparicion);
      parametros = parametros.append('casa', unHeroe.casa);


      const body = {
        nombre: unHeroe.nombre,
        bio: unHeroe.bio,
        img: unHeroe.img,
        aparicion: unHeroe.aparicion,
        casa: unHeroe.casa,
      };


      //console.log(parametros);
      return this.http.put(url, body).pipe(map((data) => data));
    }
  }





}



