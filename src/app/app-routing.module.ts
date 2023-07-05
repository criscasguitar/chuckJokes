import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChuckComponent } from './chuck/chuck.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'chuck', component: ChuckComponent
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
