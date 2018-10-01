import { Component, OnInit } from '@angular/core';
import  { GetDataService } from '../services/get-data/get-data.service';
import { GetDataComponent } from '../services/get-data/get-data.component';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  providers: [ GetDataService ]
})
export class PictureComponent implements OnInit {

  pictures: PictureComponent[];

  title: string;
  date: Date;
  url: string;
  eventId = 5;

  constructor(private dataService: GetDataService) { }



  ngOnInit() {
    this.dataService.getAllEventPictures(this.eventId)
    .subscribe( data => this.pictures = data);
  }

}
