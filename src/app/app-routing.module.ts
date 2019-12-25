import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RentInfoComponent } from './rent-info/rent-info.component';
import { SendMeComponent } from './send-me/send-me.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'rentInfo', pathMatch: 'full', component: RentInfoComponent },
  { path: 'sendInfo', pathMatch: 'full', component: SendMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
