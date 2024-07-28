import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PagesService } from '../services/pages.service';
import { ICharacter } from '../models/pages.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrl: './characteres.component.scss'
})
export class CharacteresComponent {
  public characteres$ = new Observable<ICharacter[]>();

  constructor(private pagesService: PagesService, private _router: Router){ }
  
  ngOnInit(){
    this.characteres$ = this.pagesService.getInfo();
  }

  addFavorite(character:ICharacter){
    this._router.navigateByUrl('/pages/favorites')
  }
}
