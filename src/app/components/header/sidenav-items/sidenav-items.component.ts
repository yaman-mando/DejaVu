import { Component, OnInit } from '@angular/core';
import {Menu} from "../../../enums/menuItems.enum";
import {AdminOption} from "../../../enums/admin-options.enum";
import {TranslateBaseService} from "../../../app-translation/services/translation-base.service";

@Component({
  selector: 'sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.scss']
})
export class SidenavItemsComponent implements OnInit {

  constructor(public _tb:TranslateBaseService) { }

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

}
