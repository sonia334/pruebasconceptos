import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { ConnavbarComponent } from './connavbar/connavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Hijo1Component,
    ConnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
