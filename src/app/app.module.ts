import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './publico/paginaMaestra/nav-bar/nav-bar.component';
import { NavBarLateralComponent } from './publico/paginaMaestra/nav-bar-lateral/nav-bar-lateral.component';
import { FooterComponent } from './publico/paginaMaestra/footer/footer.component';
import { IndexComponent } from './publico/index/index.component';
import { Error404Component } from './publico/errors/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarLateralComponent,
    FooterComponent,
    IndexComponent,
    Error404Component,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
