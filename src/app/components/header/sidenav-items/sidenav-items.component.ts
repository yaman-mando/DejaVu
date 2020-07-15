import { Component, OnInit } from '@angular/core';
import {Menu, MenuItems} from "../../../enums/menuItems.enum";
import {AdminOption, AdminOptionsList} from "../../../enums/admin-options.enum";

@Component({
  selector: 'sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.scss']
})
export class SidenavItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*Method for getting menu items form Enum*/
  getMenuItems() : Menu[]{
    return MenuItems;
  }

  /*Method for getting Admin items form Enum*/
  getAdminItems() : AdminOption[]{
    return AdminOptionsList;
  }

}
