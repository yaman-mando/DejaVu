import {Component, Injectable, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {TranslateBaseService} from "../../../../app-translation/services/translation-base.service";
import {Menu} from "../../../../enums/menuItems.enum";
import {AppStorageService} from "../../../../app-factory/services/app-storage.service";
import {HelpService} from "../../../../services/help.service";

@Component({
  selector: 'siteMenu',
  templateUrl: './site-menu.component.html',
  styleUrls: ['./site-menu.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
@Injectable()
export class SiteMenuComponent{

constructor(public _tb:TranslateBaseService,
            public _help:HelpService,
            public _appStorageService:AppStorageService) {

}
  /*Method for getting menu items form Enum*/
  getMenuItems() : Menu[]{
    return this._tb.translate.static.menuItems
  }

  getCurrentRoute() :string{
     let _url:string;
    this._help.currentRouter$.subscribe(res=>{
       _url = res;
    });
    return _url
  }



}
