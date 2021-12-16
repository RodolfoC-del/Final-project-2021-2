import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumbitComponent } from './sumbit/sumbit.component';
import { ButtonComponent } from './button/button.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,
    SumbitComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
