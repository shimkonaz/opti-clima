import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { LoginComponent } from './login';
import { SignupComponent } from './signup';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { NavigationComponent } from './navigation';
import { NotFoundComponent } from './not-found';
import { HomeComponent } from './home';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent, 
    SignupComponent, 
    HeaderComponent, 
    FooterComponent, 
    NavigationComponent, 
    NotFoundComponent, 
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
