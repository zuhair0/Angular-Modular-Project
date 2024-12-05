import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  //{path: '', redirectTo: '/home', pathMatch: 'full'}, //used to render home component directly on app starting we can also do it by giving '' to next line
  // { path: 'home',component: HomeComponent},
  { 
    path: '', 
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) 
  },//this route is used for modular routing in lazy loading
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
