import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarMenuComponent } from './module/navbar-menu/navbar-menu.component';
import { HomeComponent } from './module/home/home.component';
import {CommonComponentModule} from './common/common-component.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AngularMaterialModule,
    CommonComponentModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
