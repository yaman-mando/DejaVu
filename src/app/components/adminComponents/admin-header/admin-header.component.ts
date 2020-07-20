import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShareableService} from "../../../services/shareable.service";
import {AppStorageService} from "../../../app-factory/services/app-storage.service";
import {HelpService} from "../../../services/help.service";
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";

@Component({
  selector: 'adminHeader',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit,OnDestroy {


  constructor(public _shareService:ShareableService,
              public _tb:TranslateBaseService,
              public _help:HelpService,
              public _storage:AppStorageService) {

    this._help.checkSideBar();
  }

  ngOnInit() {
    /*add Class to Html selector in adminPage*/
     document.getElementsByTagName("html")[0].setAttribute('class','admin-page');
  }
  ngOnDestroy() {
    /*remove adminPage Class from Html selector when page is destroy*/
    document.getElementsByTagName("html")[0].removeAttribute('class');
  }


  /*for close sidebar*/
  public toggleSidebar()
  {
    this._shareService.adminSideBarOpen =!this._shareService.adminSideBarOpen;
  }

}
