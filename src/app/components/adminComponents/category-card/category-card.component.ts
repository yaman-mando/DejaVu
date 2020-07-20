import {Component, Input, OnInit} from '@angular/core';
import {WI_AdminCatCardObject} from "../../../interfaces/general.interface";

@Component({
  selector: 'adminCategoryCard',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() cardsListData:WI_AdminCatCardObject;

  constructor() { }

  ngOnInit() {
  }

}
