import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RentInfoComponent } from './rent-info/rent-info.component';
import { SendMeComponent } from './send-me/send-me.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatChipsModule,
  MatCardModule,
  MatBadgeModule
} from '@angular/material';
import { Cart } from '../app/common/cart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RentInfoComponent,
    SendMeComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatBadgeModule
  ],
  providers: [Cart],              // add [Cart] provider for use globally Cart object array
  bootstrap: [AppComponent]
})
export class AppModule { }
