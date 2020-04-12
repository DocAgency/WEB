import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthAppComponent } from './auth-app/auth-app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthWelcomeComponent } from './auth-welcome/auth-welcome.component';

@NgModule({
  declarations: [
    AuthAppComponent, 
    AuthLoginComponent, 
    AuthWelcomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    AuthRoutingModule
  ],
  providers: [
  ],
})
export class AuthModule { }
