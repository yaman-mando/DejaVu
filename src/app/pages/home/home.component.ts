import { Component, OnInit } from '@angular/core';
import {AppStorageService} from "../../app-factory/services/app-storage.service";
import {WI_CategoryCardList, WI_SlideShowList} from "../../interfaces/general.interface";
import {categoriesList, slideShowList} from "../../data/general.data";
import {TranslateBaseService} from "../../app-translation/services/translation-base.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(public _Storage:AppStorageService,
              public _tb:TranslateBaseService) {

  }

  ngOnInit() {
  }

  getSlideShowListData():WI_SlideShowList{
    return slideShowList
  }

  getCategoryListData():WI_CategoryCardList{
    return categoriesList
  }

}
