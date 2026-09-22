import { Component } from '@angular/core';
import { homeCarouselData } from '../../../../../../Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent { 
  carouselData : any;
  interval :any;
  currentSlide = 0;

  ngOnInit() {
    this.carouselData = homeCarouselData;
    this.autoPlay();
  }

  autoPlay(){
    setInterval(() => {
      this.nextSlide();
    },2000)
  }

  nextSlide(){
    this.currentSlide = (this.currentSlide+1) % this.carouselData.length;
  }

}
