import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { SlideshowModule } from 'ng-simple-slideshow';
import { CarouselModule } from "angular2-carousel";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { TechInfoComponent } from './tech-info/tech-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SliderComponent,
    TechInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, SlideshowModule, CarouselModule,
    MatInputModule, MatIconModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
