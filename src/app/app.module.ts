import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import { SiteMenuComponent } from './components/header/site-menu/site-menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { SidenavItemsComponent } from './components/header/sidenav-items/sidenav-items.component';
import {TranslateBaseService} from "./app-translation/services/translation-base.service";
import {TranslationLoaderService} from "./app-translation/services/translation-load.service";
import {TranslateModule} from "@ngx-translate/core";
import {AppInitService} from "./app-factory/services/app-init.service";
import {AppInitFactory} from "./app-factory/Defualt-states/app-init.factory";
import {AppStorageService} from "./app-factory/services/app-storage.service";
import {LoadingsComponent} from "./components/loadings/loadings.component";
import {HelpService} from "./services/help.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingsComponent,
    HomeComponent,
    HeaderComponent,
    SiteMenuComponent,
    SidenavItemsComponent,
    AdminPanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    TranslateModule.forRoot(),
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    TranslateBaseService,
    TranslationLoaderService,
    AppStorageService,
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: AppInitFactory,
      deps: [
        AppInitService
      ],
      multi: true
    },
    HelpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
