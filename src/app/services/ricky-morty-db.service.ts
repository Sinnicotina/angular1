import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_RM } from '../config/url.servicios';
import { map } from 'rxjs';

import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  species: string; // Añadido
  gender: string;  // Añadido
  image: string;  
  status: string;
}

export interface ApiResponse<T> {
  results: T[];
  // Añade más propiedades si la API devuelve más datos
}



@Injectable({
  providedIn: 'root',
})
export class RickyMortyDbService {

  constructor(public http: HttpClient) {}

  getRMCharacters(): any {
    let url = `${URL_RM}/character`;

    return this.http.get(url).pipe(
      map((data:any) => {
        //console.log('DATOS', data);
        return data.results;
      })
    );
  }

  getRMCharactersById(unId:number): any {
    let url = `${URL_RM}/character/${unId}`;

    return this.http.get(url).pipe(
      map((data:any) => {
        //console.log('DATOS', data);
        return data;
      })
    );
  }


  getRMLocations(): any {
    let url = `${URL_RM}/location`;

    return this.http.get(url).pipe(
      map((data:any) => {
        //console.log('DATOS', data);
        return data.results;
      })
    );
  }

  getRMEpisodes(): any {
    let url = `${URL_RM}/episode`;

    return this.http.get(url).pipe(
      map((data:any) => {
        //console.log('DATOS', data);
        return data.results;
      })
    );
  }

 // Método para obtener personajes por página
 getRMCharacters1(page: number = 1): Observable<ApiResponse<Character>> {
  const url = `${URL_RM}/character?page=${page}`;
  return this.http.get<ApiResponse<Character>>(url).pipe(
    map((data: ApiResponse<Character>) => data)
  );
}



}
