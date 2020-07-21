import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {WI_CategoryCardList} from "../../../interfaces/general.interface";


@Component({
  selector: 'slickCategories',
  templateUrl: './slick-categories.component.html',
  styleUrls: ['./slick-categories.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SlickCategoriesComponent implements OnInit, OnChanges {

  /*categories List data*/
  @Input() categoriesList:WI_CategoryCardList;
  @Input() isRTL : boolean;

  slideConfig : any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

    /*carousel config*/
    this.slideConfig = {
      infinite: true,
      centerMode: true,
      centerPadding: '400px',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: false,
      rtl: this.isRTL,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '300px',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
          }
        },
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '150px',
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
          }
        },
        {
          breakpoint: 899,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '75px',
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
          }
        },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000
          }
        }
      ]
    };
  }

}
