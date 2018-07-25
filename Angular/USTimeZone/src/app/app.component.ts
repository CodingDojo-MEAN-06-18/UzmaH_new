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

    if (place === "PST") {
    this.isPST = true;
    this.curDate.setHours(this.curDate.getHours()-2);
    this.isMST = false;
    this.isCST = false;
    this.isEST = false;
    }
    else if  (place === "MST"){
      this.isMST = true;
      this.curDate.setHours(this.curDate.getHours()-1);
      this.isPST = false;
      this.isCST = false;
      this.isEST = false;
    }
    else if  (place === "CST") {
      this.isCST = true;
      // curDate.setHours(curDate.getHours()-1);
      // console.log('date is ',this.curDate)
      this.isPST = false;
      this.isEST = false;
      this.isMST = false;
    }
    else if  (place === "EST"){
     this.isEST = true;
     this.curDate.setHours(this.curDate.getHours()+1);
    //  console.log('date is ',this.curDate);
     this.isPST = false;
     this.isCST = false;
     this.isMST = false;
    }
    return this.curDate;
  }
}
