import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AdminPanelComponent} from "./pages/admin-panel/admin-panel.component";
import {LoginComponent} from "./pages/login/login.component";


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminPanelComponent},
  {path:'login',component:LoginComponent},
  {path:'**', redirectTo:'home'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
