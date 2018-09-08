import { Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from "angular2-carousel";

@Component({
  selector: 'app-tech-info',
  templateUrl: './tech-info.component.html',
  styleUrls: ['./tech-info.component.css']
})
export class TechInfoComponent implements OnInit {
  items = [
    {id:"0", url:"http://i.imgur.com/XT7VsZe.jpg", expertise:"Lorem ipsum dolor sit amet consectetur adipisicing elit", title:"Ing.", position:"robador de oxigeno", name:"Rojo de la colina rosada"},
    {id:"1", url:"http://i.imgur.com/XT7VsZe.jpg", expertise:"Lorem ipsum dolor sit amet consectetur adipisicing elit", title:"Ing.", position:"robador de oxigeno", name:"Javier"},
    {id:"2", url:"http://i.imgur.com/XT7VsZe.jpg", expertise:"Lorem ipsum dolor sit amet consectetur adipisicing elit", title:"Ing.", position:"robador de oxigeno", name:"Andres"},
    {id:"3", url:"http://i.imgur.com/XT7VsZe.jpg", expertise:"Lorem ipsum dolor sit amet consectetur adipisicing elit", title:"Ing.", position:"robador de oxigeno", name:"Ivan"},
    {id:"4", url:"http://i.imgur.com/XT7VsZe.jpg", expertise:"Lorem ipsum dolor sit amet consectetur adipisicing elit", title:"Ing.", position:"robador de oxigeno", name:"Nacho"},
    {id:"5", url:"http://i.imgur.com/XT7VsZe.jpg", expertise:"Lorem ipsum dolor sit amet consectetur adipisicing elit", title:"Ing.", position:"robador de oxigeno", name:"Marcial"}
  ];
  initItem = 1;

  constructor() {
    this.initItem = (Math.floor(Math.random()*Math.floor(this.items.length-2)))+1;
  }

  @ViewChild('topCarousel') topCarousel: CarouselComponent;
  public degree = 25;
  public moreSlides = 3;

  toggle(){
    this.topCarousel.toggleMode();
  }

  ngOnInit() {
  }

  tech(item){
    alert(item.id);
  }

}
