import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminPanelComponent} from "./admin-panel.component";
import {RouterModule, Routes} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AdminSideBarComponent} from "../../components/adminComponents/admin-side-bar/admin-side-bar.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {AdminHeaderComponent} from "../../components/adminComponents/admin-header/admin-header.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {CategoryCardComponent} from "../../components/adminComponents/category-card/category-card.component";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";


const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    PerfectScrollbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule
  ],
  providers:[],
  declarations:[AdminPanelComponent,AdminSideBarComponent,AdminHeaderComponent,CategoryCardComponent]
})

export class AdminPanelModule {

}
