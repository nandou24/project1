import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PagesService } from '../services/pages.service';
import { ICharacter, IDTOFavorite } from '../models/pages.models';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrl: './characteres.component.scss'
})
export class CharacteresComponent {
  public characteres$ = new Observable<ICharacter[]>();

  constructor(private _pagesService: PagesService, private _router: Router){ }
  
  ngOnInit(){
    this.characteres$ = this._pagesService.getInfo();
  }

  addFavorite(character:ICharacter){
    //this._router.navigateByUrl('/pages/favorites')
    const body:IDTOFavorite = {
      IdCharacter: character.id, 
      IdUser: localStorage.getItem('userId')!, 
      nameCharacter: character.name, 
      caracterUrlImagen: character.image,
      token: localStorage.getItem('token')!
    } 
    
    this._pagesService.addFavorite(body).subscribe((res) => {
      if (res !== 'ERROR') {
        Swal.fire({
          title: 'Woho!',
          text: 'Favorito añadido correctamente',
          icon: 'success',
          confirmButtonText: 'Ok',
        });

        this._router.navigateByUrl('/pages/favorites');
      }
    });
  }
}
