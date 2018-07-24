import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator'
  colors:Array<string> = ['red','yellow','green','blue','brown','purple','orange'];

  randomize(){
    return Math.floor(Math.random()*6)+1;
  }
}
