import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

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
    CoreRoutingModule
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ]
})
export class CoreModule { }
