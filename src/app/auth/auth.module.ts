import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrokenImageDirective } from './directives/broken-image.directive';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BrokenImageDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    AuthGuard
  ]
})
export class AuthModule { }
