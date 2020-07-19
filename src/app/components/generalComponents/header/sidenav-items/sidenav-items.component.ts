import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MatListItem} from "@angular/material/list";
import {ShareableService} from "../../../../services/shareable.service";
import {TranslateBaseService} from "../../../../app-translation/services/translation-base.service";
import {AdminOption} from "../../../../enums/admin-options.enum";
import {Menu} from "../../../../enums/menuItems.enum";
import {AppStorageService} from "../../../../app-factory/services/app-storage.service";
import {HelpService} from "../../../../services/help.service";

@Component({
  selector: 'sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.scss']
})
export class SidenavItemsComponent implements OnInit,AfterViewInit {

  @ViewChildren(MatListItem) Element:QueryList<MatListItem>;

  constructor(
    public _tb:TranslateBaseService,
    private _shareService:ShareableService,
    public _help:HelpService,
    public _storage:AppStorageService
  ) {

  }

  ngOnInit() {

  }

  /*Method for getting menu items form Enum*/
  getMenuItems() : Menu[]{
    return this._tb.translate.static.menuItems;
  }

  /*Method for getting Admin items form Enum*/
  getAdminItems() : AdminOption[]{
    return this._tb.translate.static.adminList;
  }

  /*for close sidebar*/
  public toggleSidebar()
  {
    this._shareService.sidenavOpen =false;
  }


  ngAfterViewInit(): void {
    this.Element.map(_element=>{
      _element._getHostElement().addEventListener("click",
        ()=> {this.toggleSidebar()})
    })
  }

}
