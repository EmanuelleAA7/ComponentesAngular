import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import * as fileSaver from 'file-saver';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

    // download() {
    //   this.fileService.downloadFile().subscribe(response => { 
//
			//let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
			//const url= window.URL.createObjectURL(blob);
      //window.open(url);
//    
      // window.location.href = response.url;
//      
      //fileSaver.saveAs(blob, 'employees.json');
      
 //     
		// }), error => console.log('Error downloading the file'),
    //              () => console.info('File downloaded successfully');
  //}



}
