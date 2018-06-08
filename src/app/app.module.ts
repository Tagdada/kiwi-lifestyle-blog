import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarMenuComponent } from './module/navbar-menu/navbar-menu.component';
import { HomeComponent } from './module/home/home.component';
import {CommonComponentModule} from './common/common-component.module';

// Import de ngx-translate et http loader
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CommonModule} from '@angular/common';

// Requis pour la compilation AOT (Ahead of Time)
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    HomeComponent
  ],
  exports: [
    CommonModule,
    TranslateModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AngularMaterialModule,
    CommonComponentModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => new TranslateHttpLoader(http, 'assets/i18n/', '.json'),
    deps: [HttpClient]
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }


