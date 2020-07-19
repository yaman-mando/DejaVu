import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuardService} from "./guards/auth-guard.service";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
    canLoad: [AuthGuardService],
    data: {
      isLogged: true,
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canLoad: [AuthGuardService],
    data: {
      isLogged: false,
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule],
  providers: [AuthGuardService]
})

export class AppRoutingModule {

}
