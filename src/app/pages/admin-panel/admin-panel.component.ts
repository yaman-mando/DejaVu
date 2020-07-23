import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ShareableService} from "../../services/shareable.service";
import {HelpService} from "../../services/help.service";
import {WI_AdminCatCardList} from "../../interfaces/general.interface";
import {adminCategoryCardsList} from "../../data/general.data";
import {TranslateBaseService} from "../../app-translation/services/translation-base.service";
import {MatMenuTrigger} from "@angular/material/menu";
import {MatCheckbox} from "@angular/material/checkbox";
import {BehaviorSubject, Observable} from "rxjs";

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

  /*admin category cards list data*/
  //adminCatCards:WI_AdminCatCardList;

  filterText:string;

  /*count of data in one page*/
  pageSize:number = 6;
  /*active page number*/
  activePage:number = 1;

  private readonly adminCatBeh:BehaviorSubject<WI_AdminCatCardList>;
  public readonly adminCat$:Observable<WI_AdminCatCardList>;

  constructor(public _shareService:ShareableService,
              public _tb:TranslateBaseService,
              public _helpService:HelpService) {

              this.adminCatBeh=new BehaviorSubject<WI_AdminCatCardList>(null);
              this.adminCat$ = this.adminCatBeh.asObservable();

    /*getting data from source*/
    //this.adminCatCards = adminCategoryCardsList;

          this.adminCatBeh.next(adminCategoryCardsList);

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

  async Filter(){
    let aaa:WI_AdminCatCardList;
    console.log(adminCategoryCardsList);
    this.adminCat$.subscribe(res=>{
       aaa =res;
    });
    console.log(this.filterText);
    if(this.filterText == ''){
        this.adminCatBeh.next(adminCategoryCardsList);
    }
    else {
         aaa.catCardList= await aaa.catCardList.filter(res => {
          return  res.title.toLocaleLowerCase().match(this.filterText.toLocaleLowerCase());
      });
         console.log(aaa.catCardList);
         this.adminCatBeh.next(aaa);
    }
  }

}
