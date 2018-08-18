import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power:number;
  constructor() { }
  // onClick(){
  //   console.log("clicking");
  // }
  ngOnInit() {
    this.power=1;
  }

}
