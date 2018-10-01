import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  selectedFile: File;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  onUpload() {
    // upload code goes here
    // this.http is the injected HttpClient
  this.http.post('/file-upload', this.selectedFile)
  .subscribe();
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
