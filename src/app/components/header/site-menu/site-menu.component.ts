import {Component, Injectable, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Menu, MenuItems} from "../../../enums/menuItems.enum";

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


  /*Method for getting menu items form Enum*/
  getMenuItems() : Menu[]{
    return MenuItems;
  }



}
