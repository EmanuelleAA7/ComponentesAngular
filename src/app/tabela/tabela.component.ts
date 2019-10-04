import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import * as fileSaver from 'file-saver'; // npm i --save file-saver
import {DownloadService} from '../download.service';

export ​interface PeriodicElement {
  ​name: string;
  ​position: number;
  ​weight: number;
  ​symbol: string;
 }
 
 const ELEMENT_DATA: PeriodicElement[] = [
  ​{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  ​{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  ​{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  ​{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  ​{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  ​{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  ​{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  ​{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  ​{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  ​{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ]

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  fileSystemName="arquivo.csv";
 

  constructor(private downloadService: DownloadService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  ​ displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 ​  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

 ​  applyFilter(filterValue: string) {
   ​this.dataSource.filter = filterValue.trim().toLowerCase();
 ​}

 downloadFileSystem() {
  this.downloadService.downloadFileSystem(this.fileSystemName)
    .subscribe(response => {
      const filename = response.url.split("/");
      const resultado = filename[filename.length-1];
      this.saveFile(response.body, resultado);
    });
}


saveFile(data: any, filename: string) {
  console.log(filename);
  const blob = new Blob([data], {type: 'text/csv; charset=utf-8'});
  fileSaver.saveAs(blob, filename);
}

}
