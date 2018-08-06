import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
items:Array<boolean>  = [true,true,true,true,true,true,true,true];

onClick(idx){
  this.items[idx] = !this.items[idx];
  }
}
