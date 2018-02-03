import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {RegisterComponent} from './Register/register.component';
import {LoginComponent} from './Login/login.component';
import {HomeComponent} from './Home/home.component';
import {ProfileComponent} from './Profile/profile.component';
import {NavbarComponent} from './Navbar/navbar.component';

import {HttpService} from './Services/http.service'

import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
