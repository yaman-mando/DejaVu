import {Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {WI_SlideShowList} from "../../../interfaces/general.interface";


@Component({
  selector: 'slideShow',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SlideShowComponent implements OnInit,OnChanges {

  /*slider list data*/
  @Input() slideShowList:WI_SlideShowList;
  @Input() isRTL : boolean = false;


  slideConfig : any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    /*slider config*/
    this.slideConfig = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      rtl: this.isRTL,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
          }
        }
      ]
    };
  }

}
