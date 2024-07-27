import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private _fb: FormBuilder,
    private _router: Router
  ) {}
 
  public myForm:FormGroup  = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  login(){
    console.log(this.myForm.value)
  }

  fieldIsInvalidReactive(field: any) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  

}
