import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageSources = [];
  constructor() { }

  ngOnInit() {
    for(let i = 0;i<10;i++){
      let url = 'https://picsum.photos/'+((Math.random()*10)+1080)+'/'+((Math.random()*10)+720);
      this.imageSources.push(url);
    }
  }

}
