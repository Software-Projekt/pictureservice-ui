import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventComponent } from '../../event/event.component';
import { PictureComponent } from '../../picture/picture.component';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/pictureservice/webapi/"
  }


  getAllEvents(): Observable<EventComponent[]> {
    return this.http.get<EventComponent[]>(this.url+'events/');
  }

  getSingleEvent(eventId): Observable<EventComponent[]> {
    return this.http.get<EventComponent[]>(this.url+'events/'+eventId);
  }

  getAllEventPictures(eventId): Observable<PictureComponent[]>{
    return this.http.get<PictureComponent[]>(this.url+'events/'+eventId+'/pictures');
  }

  getSinglePicture(eventId, pictureId){
    return this.http.get(this.url+'events/'+eventId+'/pictures/'+pictureId);
  }

  setEvent(title, date){
    return this.http.post(this.url+'events', {'title': title, 'date': date});

  }

  setPicture(eventId, title, url){
    return this.http.post(this.url+'events/'+eventId+'/pictures/', {'title': title, 'url': url});
  }
}
