import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResult, ICharacter } from '../models/pages.models';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private url = 'https://rickandmortyapi.com/api/character';

  constructor( private _http: HttpClient ) { } //!INYECTAR DEPENDENCIAS


  getInfo( ): Observable<ICharacter[]>{ //! NATIVOS PARA DEVOLVER OBSERVABLES => of, from (rxjs)
    return this._http.get<IApiResult>( this.url )
    .pipe(
      map( (data) => data.results ),
      // catchError( (_) => {

      //   // return data
      // }  )
    )
  }
}
