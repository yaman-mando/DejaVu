import {Injectable} from "@angular/core";
import {AppStorageService, LangListStatic} from "../app-factory/services/app-storage.service";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";


@Injectable()
export class HelpService {

  private readonly loadingBeh:BehaviorSubject<boolean>;
  public readonly loading$:Observable<boolean>;


  constructor(private _appStorageService:AppStorageService,
              private _route:Router) {

    this.loadingBeh = new BehaviorSubject<boolean>(false);
    this.loading$ = this.loadingBeh.asObservable();
  }

  async changeLang(){
    const currentLang = this._appStorageService.getUserPreferences().langId;
    if(currentLang == 1){
      await this._appStorageService.setUserPreferences({
        lang:'ar',
        langId:LangListStatic['ar']
      });
    }
    else{
      await this._appStorageService.setUserPreferences({
        lang:'en',
        langId:LangListStatic['en']
      });
    }
    window.location.reload()
  }

  async logIn(_userName:string){
    await this._appStorageService.setUserPreferences({
      isLoggedIn:true,
      userName:_userName,
    });
    await this._route.navigateByUrl('/home');
  }

  async logOut(){
    await this._appStorageService.setUserPreferences({
      isLoggedIn:false,
      userName:null,
    });
    await this._route.navigateByUrl('/home');
  }

  public loading(_case:boolean){
    if(_case){
      this.loadingBeh.next(true);
    }
    else {
      this.loadingBeh.next(false);
    }
  }
}
