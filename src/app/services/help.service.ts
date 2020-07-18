import {Injectable} from "@angular/core";
import {AppStorageService, LangListStatic} from "../app-factory/services/app-storage.service";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {TranslateBaseService} from "../app-translation/services/translation-base.service";
import {ToastrService} from "ngx-toastr";


@Injectable()
export class HelpService {

  private readonly loadingBeh:BehaviorSubject<boolean>;
  public readonly loading$:Observable<boolean>;

  private readonly currentRouterBeh:BehaviorSubject<string>;
  public readonly currentRouter$:Observable<string>;



  constructor(private _appStorageService:AppStorageService,
              private _route:Router,
              private toastr: ToastrService,
              private _tb:TranslateBaseService) {

    this.loadingBeh = new BehaviorSubject<boolean>(false);
    this.loading$ = this.loadingBeh.asObservable();

    this.currentRouterBeh = new BehaviorSubject<string>(null);
    this.currentRouter$ = this.currentRouterBeh.asObservable();
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
    window.location.reload();
  }

  async logIn(_userName:string){
    await this._appStorageService.setUserPreferences({
      isLoggedIn:true,
      userName:_userName,
    });
    await this._route.navigateByUrl('/home');
  }

  public async  logOut(){
    await this._appStorageService.setUserPreferences({
      isLoggedIn:false,
      userName:null,
    });
    await this._route.navigateByUrl('/login');
  }

  public loading(_case:boolean){
    if(_case){
      this.loadingBeh.next(true);
    }
    else {
      this.loadingBeh.next(false);
    }
  }

  public setRouter(_url:string){
    this.currentRouterBeh.next(_url);
  }


  /*show email password wrong toast*/
  public async showEmailPasswordWrongToast(_duration: number = 1600) {
    this.showToast(this._tb.translate.texts.check_email_password, _duration)
  }

  /* success toast */
  public async showSuccessLogin(_duration: number = 1600){
    this.showToastSuccess(this._tb.translate.texts.SIGNIN_SUCCESS, _duration)
  }

  /*show toast*/
  public async showToast(_msg: string, _duration: number = 1600) {
    await this.toastr.warning(_msg,'',{
      closeButton: true,
      progressBar: false,
      positionClass: "toast-bottom-center",
      timeOut: _duration,
    });
  }

  public async showToastSuccess(_msg: string, _duration: number = 1600) {
    await this.toastr.success(_msg,'',{
      closeButton: true,
      progressBar: false,
      positionClass: "toast-bottom-center",
      timeOut: _duration,
    });
  }
}
