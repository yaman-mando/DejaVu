import {Inject, Injectable} from "@angular/core";
import {LangState, LangStateInterface} from "../../app-translation/lang.state";
import {AppStorageService} from "./app-storage.service";
import {TranslationLoaderService} from "../../app-translation/services/translation-load.service";
import {TranslateService} from "@ngx-translate/core";
import {TranslateBaseService} from "../../app-translation/services/translation-base.service";
import {DOCUMENT} from "@angular/common";
import {AppUserPreferencesInitialState, AppUserPreferencesKey} from "../Defualt-states/app-user-data.state";
import {AppStorageKey} from "../Defualt-states/app-storage.state";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service'

@Injectable()
export class AppInitService {
  constructor(
    private _appStorageService: AppStorageService,
    @Inject(LOCAL_STORAGE) private _storage: StorageService,
    private _TLService: TranslationLoaderService,
    private _translateService: TranslateService,
    private _translateBaseService: TranslateBaseService,
    @Inject(DOCUMENT) private _document: Document,
  ) {

  }

  public async initTranslate() {
    let langArray = [];
    Object.keys(LangState.langState()).forEach((key) => {
      const langObject = LangState.langState()[key] as LangStateInterface;
      langArray.push(langObject.name);

      //load globe translation + set default
      this._TLService.loadTranslations(langObject.translateObject);
    });
    //manage lang state
    this._translateService.addLangs(langArray);
    this._translateService.setDefaultLang(LangState.defaultLang().name);
    this._translateService.use(LangState.defaultLang().name);
  }

  public async initStorage() {
    await this._appStorageService.initStorage({
      isLoggedIn: await this._storage.get(AppStorageKey.isLoggedIn),
    });
  }

  /*init user preferences*/
  public async initUserPreferences() {
    await this._appStorageService.initUserPreferences({
      lang: await this._storage.get(AppUserPreferencesKey.lang),
      langId: await this._storage.get(AppUserPreferencesKey.langId),
      userName: await this._storage.get(AppUserPreferencesKey.userName),
      isLoggedIn:await this._storage.get(AppUserPreferencesKey.isLoggedIn)
    })
  }

  public async initAppLangAndDirection() {
    let langValue: string = this._appStorageService.getUserPreferences().lang;
    let langId: number = this._appStorageService.getUserPreferences().langId;
    //if not set > load default
    if (!langValue) {
      await this._appStorageService.setUserPreferences({lang: AppUserPreferencesInitialState.lang});
      langValue = this._appStorageService.getUserPreferences().lang;
    }
    if (!langId) {
      await this._appStorageService.setUserPreferences({langId: AppUserPreferencesInitialState.langId});
    }

    const langObject: LangStateInterface = LangState.langState()[langValue];
    if (langValue === langObject.name) {
      this._translateService.use(langObject.name);
      //load translate object
      this._translateBaseService.setTranslationObject(langObject.translateObject);
      //change document lang
      this._document.documentElement.setAttribute('lang', langObject.name);
       //this._provider.isRtlApp = langObject.isRtl;
    }
  }


}
