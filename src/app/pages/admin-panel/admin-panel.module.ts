import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminPanelComponent} from "./admin-panel.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
  }
];

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[],
  declarations:[AdminPanelComponent]
})

export class AdminPanelModule {

}
