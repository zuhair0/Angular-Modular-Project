import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
//..
const routes: Routes = [
  //{path: '', redirectTo: '/home', pathMatch: 'full'}, //used to render home component directly on app starting we can also do it by giving '' to next line
  // { path: 'home',component: HomeComponent},
  { 
    path: '', 
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) 
  },//this route is used for modular routing in lazy loading 
  //{path:'about', component:AboutComponent},
  //lazy load the about module below
  {
    //we can call about component by giving paths at two places
    //first location is below like path: 'about'
    //and second is about-routing.module.ts at routes
    //NOTE THAT IF WE GIVE PATH TO BOTH LOCATIONS OUR COMPONENT WEILL NOT LOAD AND BLACK SCREEN WILL BE COMING
    //WE ONLY NEED TO GIVE PATH AT ONLY ONE PLACE
    path:'',
    loadChildren: ()=> import('./components/about/about.module').then((m)=>m.AboutModule)
  }
];
//hghglllsas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
