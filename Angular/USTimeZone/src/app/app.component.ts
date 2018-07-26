import { Component } from '@angular/core';
import { NgStyle, getLocaleDateFormat } from '../../node_modules/@angular/common';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  isMST = false;
  isCST = false;
  isPST = false;
  isEST = false;
  curDate = new Date();

  onButtonClick(place){
    this.curDate = new Date();
    this.isMST = false;
    this.isCST = false;
    this.isPST = false;
    this.isEST = false;
    if (place === "PST") {
    this.isPST = true;
    this.curDate.setHours(this.curDate.getHours()-2);
    }
    else if  (place === "MST"){
      this.isMST = true;
      this.curDate.setHours(this.curDate.getHours()-1);
    }
    else if  (place === "CST") {
      this.isCST = true;
    }
    else if  (place === "EST"){
     this.isEST = true;
     this.curDate.setHours(this.curDate.getHours()+1);
    }
    return this.curDate;
  }
}
