import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


import { AppComponent } from './app.component';

import { DashboardComponent }   from '../pages/dashboard/dashboard.component';
import { RentalsComponent }      from '../pages/rentals/rentals.component';

import { MainService }      from '../providers/main.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RentalsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [MainService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
