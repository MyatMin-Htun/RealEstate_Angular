import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentInfoComponent } from './rent-info/rent-info.component';
import { SendMeComponent } from './send-me/send-me.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'rentInfo', pathMatch: 'full', component: RentInfoComponent },
  { path: 'sendInfo', pathMatch: 'full', component: SendMeComponent },
  { path: 'contactUs', pathMatch: 'full', component: ContactUsComponent },
  { path: 'aboutUs', pathMatch: 'full', component: AboutUsComponent }
];

@NgModule({
  // add [scrollPositionRestoration] to navigate to top of the page when loaded
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
