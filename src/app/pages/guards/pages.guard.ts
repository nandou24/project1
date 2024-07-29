import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
// import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class PagesGuard {
  constructor(
    private authService: AuthService
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn() == false) {//! ESTÁ LOGUEADO?
      Swal.fire({
        title: 'Error!',
        text: 'Debes loguearte primero',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      this.authService.returnToLogin();
      return false;
     }
     else{
      return true
     }
    
    //! YA ESTÉ LOGUEADO, POR TANTO NO TE VA A DEJAR ENTRAR A LAS RUTAS
    /*Swal.fire({
      title: 'Error!',
      text: 'Debes loguearte primero',
      icon: 'error',
      confirmButtonText: 'Ok',
    });
    this.authService.returnToLogin();
    return false;*/
  }
}