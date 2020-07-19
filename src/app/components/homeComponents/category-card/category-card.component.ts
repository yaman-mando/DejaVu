import {Component, Input, OnInit} from '@angular/core';
import {WI_CategoryCardObject} from "../../../interfaces/general.interface";


@Component({
  selector: 'categoryCard',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() cardItem:WI_CategoryCardObject;
  constructor() { }

  ngOnInit() {
  }

}
