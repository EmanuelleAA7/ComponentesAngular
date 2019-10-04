import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-selectlist',
  templateUrl: './selectlist.component.html',
  styleUrls: ['./selectlist.component.css']
})
export class SelectlistComponent implements OnInit {

  myControl = new FormControl();
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  selectedOptions = [];
  checkedValues = [];
  // teste2=[];
  aplicar(){
      this.typesOfShoes.push(this.myControl.value)
  }

  onSelection(event, value) {
    this.checkedValues = [];
    this.selectedOptions = value;
    for (let i = 0; i < this.selectedOptions.length; i++) {
      this.checkedValues.push(this.selectedOptions[i]._text.nativeElement.innerText);
    }
  }

  passar(event,valor){
    this.checkedValues = [];
    this.selectedOptions = valor;
    for (let i = 0; i < this.selectedOptions.length; i++) {

      if(this.teste.includes(this.selectedOptions[i])){
        alert('already ')
      }
      else{
        this.teste.push(this.selectedOptions[i]._text.nativeElement.innerText);
      }
    }
  }

  teste: object[] = [];


  constructor() { }

  ngOnInit() {
   
  }

}
