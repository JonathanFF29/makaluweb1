import { Component } from '@angular/core';
import {Image} from './image.interface';

const IMAGES: Image[] = [
  { "title": "We are covered", "url": "assets/slider6.svg" },
  { "title": "Generation Gap", "url": "assets/slider5.svg" },
  { "title": "Potter Me", "url": "assets/slider1.svg" },
  { "title": "Pre-School Kids", "url": "assets/slider4.svg" },
  { "title": "Young Peter Cech", "url": "assets/slider2.svg" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
  public IMAGESs = IMAGES;

}
