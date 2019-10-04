import { Component, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver'; // npm i --save file-saver
import {DownloadService} from '../download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  fileSystemName: string;
  classpathFileName: string;

  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
  }

  downloadFileSystem() {
    this.downloadService.downloadFileSystem(this.fileSystemName)
      .subscribe(response => {
        const filename = response.headers.get('filename');
 
        this.saveFile(response.body, filename);
      });
  }

 
  saveFile(data: any, filename?: string) {
    const blob = new Blob([data], {type: 'text/csv; charset=utf-8'});
    fileSaver.saveAs(blob, filename);
  }




}
