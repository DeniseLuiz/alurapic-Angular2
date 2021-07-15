import { PhotoService } from './photos/photo/photo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  photos: any[] = [];

  constructor(private photoService : PhotoService){}

  ngOnInit(): void {

    this.photoService
    .listFrom()
    .subscribe( photos => {
      this.photos = photos})

  }
}
