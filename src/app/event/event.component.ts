import { Component, OnInit } from '@angular/core';
import { GetDataComponent } from '../services/get-data/get-data.component';
import  { GetDataService } from '../services/get-data/get-data.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [ GetDataService ]
})
export class EventComponent implements OnInit {

  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  date: Date;
  found: boolean = false;

  public events:EventComponent[];

  constructor(private dataService: GetDataService) {


    //   data => {
    //     if (data.length){
    //       this.title = data.title;
    //       this.date = data.date;
    //       this.found = true;
    //     }
    //   }
    // )

  }

  ngOnInit() {
    this.dataService.getAllEvents()
    .subscribe( data => this.events = data);
  }

}
