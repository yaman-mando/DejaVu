import {Component} from '@angular/core';
import {ShareableService} from "./services/shareable.service";
import {TranslateService} from "@ngx-translate/core";
import {AppStorageService} from "./app-factory/services/app-storage.service";
import {NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {HelpService} from "./services/help.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "(window:resize)": "this._helpService.ScreenDimensions();this._helpService.checkSideBar()",
    "(window:load)": "this._helpService.ScreenDimensions()",
  }
})
export class AppComponent {

  constructor(private router: Router,
              public _helpService: HelpService,
              public _shareService: ShareableService,
              private _appStorageService: AppStorageService,
              private _translateService: TranslateService) {


    /*check App lang and set direction depend on it*/
    if (this._translateService.currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
      this._shareService.isRtl = true;
    } else {
      document.documentElement.dir = 'ltr';
      this._shareService.isRtl = false;
    }

    /*active router change listener*/
    /*start load router*/
    this.router.events
      .pipe(filter((res) => {
        return res instanceof NavigationStart
      }))
      .subscribe(async (res: NavigationStart) => {
        this._helpService.loading(true);
      });

    /*end load router*/
    this.router.events
      .pipe(filter((res) => {
        return res instanceof NavigationEnd
      }))
      .subscribe(async (res: NavigationEnd) => {
        this._helpService.setRouter(res.urlAfterRedirects);
        await this._helpService.ScreenDimensions();
        this._helpService.loading(false);
      });

    /*error load router*/
    this.router.events
      .pipe(filter((res) => {
        return res instanceof NavigationError
      }))
      .subscribe(async (res) => {
        this._helpService.loading(false);
      });


  }

}
