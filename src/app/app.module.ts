import {MatToolbarModule} from "@angular/material/toolbar";
import {APP_INITIALIZER, NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SidenavItemsComponent} from "./components/generalComponents/header/sidenav-items/sidenav-items.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {HomeComponent} from "./pages/home/home.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {AppInitFactory} from "./app-factory/Defualt-states/app-init.factory";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material/input";
import {TranslationLoaderService} from "./app-translation/services/translation-load.service";
import {AppRoutingModule} from "./app-routing.module";
import {SlideShowItemComponent} from "./components/homeComponents/slide-show-item/slide-show-item.component";
import {BarRatingModule} from "ngx-bar-rating";
import {ToastrModule} from "ngx-toastr";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {SlideShowComponent} from "./components/homeComponents/slide-show/slide-show.component";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {AppStorageService} from "./app-factory/services/app-storage.service";
import {SiteMenuComponent} from "./components/generalComponents/header/site-menu/site-menu.component";
import {HeaderComponent} from "./components/generalComponents/header/header.component";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {FooterComponent} from "./components/generalComponents/footer/footer.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingsComponent} from "./components/generalComponents/loadings/loadings.component";
import {CategoryCardComponent} from "./components/homeComponents/category-card/category-card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AppInitService} from "./app-factory/services/app-init.service";
import {AppComponent} from "./app.component";
import {TranslateBaseService} from "./app-translation/services/translation-base.service";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {SlickCategoriesComponent} from "./components/homeComponents/slick-categories/slick-categories.component";
import {HelpService} from "./services/help.service";


@NgModule({
  declarations: [
    AppComponent,
    LoadingsComponent,
    HomeComponent,
    HeaderComponent,
    SiteMenuComponent,
    SidenavItemsComponent,
    SlideShowComponent,
    SlickCategoriesComponent,
    CategoryCardComponent,
    FooterComponent,
    SlideShowItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    TranslateModule.forRoot(),
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    SlickCarouselModule,
    BarRatingModule
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
