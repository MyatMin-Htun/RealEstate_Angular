import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RentInfoComponent } from './rent-info/rent-info.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SendMeComponent } from './send-me/send-me.component';
import {
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RentInfoComponent,
    SendMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
