import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-novalista',
  templateUrl: './novalista.component.html',
  styleUrls: ['./novalista.component.css']
})
export class NovalistaComponent implements OnInit {
  task: string;
  tasks = [];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three','four','five','six','seven','eight','nine','ten'];
  filteredOptions: Observable<string[]>;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

}


private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}

onClick(){
  this.tasks.push({name: this.task});
this.task = '';
}
}