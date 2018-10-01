import { Component, OnInit } from '@angular/core';
import  { GetDataService } from './get-data.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
  providers: [ GetDataService ]
})
export class GetDataComponent implements OnInit {

  constructor(private dataService: GetDataService) {
    //Event anlegen
    // this.dataService.setEvent("Test", "2018-09-28T11:48:36.208Z[UTC]").subscribe(response => {
    //   console.log('Post: ');}
    //   , err => {
    //     console.log(err);
    //   });

    // this.dataService.setPicture(5,"Testbild", "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350").subscribe(response => {
    //   console.log('Post: ');}
    //   , err => {
    //     console.log(err);
    //   });

    //Alle Events ausgeben
    this.dataService.getAllEvents();

    //Alle Bilder ausgeben
    this.dataService.getAllEventPictures(5).subscribe(response => {
      console.log('Antwort:', response);}
    , err => {
      console.log('Something went wrong ', err);
});

  }

  ngOnInit() {
  }

}
