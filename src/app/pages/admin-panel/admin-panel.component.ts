import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ShareableService} from "../../services/shareable.service";
import {HelpService} from "../../services/help.service";
import {WI_AdminCatCardList} from "../../interfaces/general.interface";
import {adminCategoryCardsList} from "../../data/general.data";
import {TranslateBaseService} from "../../app-translation/services/translation-base.service";
import {MatMenuTrigger} from "@angular/material/menu";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  host: {
    "(window:resize)":"this._helpService.checkSideBar()",
    "(window:load)":"this._helpService.checkSideBar()",
  }
})
export class AdminPanelComponent implements OnInit {

  @ViewChild(MatMenuTrigger,{static:false}) trigger: MatMenuTrigger;

  @ViewChildren(MatCheckbox) allCheck:QueryList<MatCheckbox>;

  adminCatCards:WI_AdminCatCardList;

  pageSize:number = 6;
  activePage:number = 1;

  constructor(public _shareService:ShareableService,
              public _tb:TranslateBaseService,
              public _helpService:HelpService) {

    /*getting data from source*/
    this.adminCatCards = adminCategoryCardsList
  }

  ngOnInit() {

  }

  /*close members menu Method*/
  closeMatMenu(){
    this.trigger.closeMenu()
  }

  /*check all choices Method*/
  checkAllChoice(_value){
    this.allCheck.map((res,i)=>{
       if(i != 0) {
         res.checked = !_value;
       }
     })
  }

  /*convert number to array of numbers method*/
  numToArray(num:number):number[]{
    let _arr = [];
    for (let i=0;i<num;i++){
      _arr.push(i);
    }
    return _arr
  }
}
