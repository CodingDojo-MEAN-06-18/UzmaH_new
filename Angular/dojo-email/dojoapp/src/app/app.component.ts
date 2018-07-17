import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // create a list of objects in an emails array. Each object
  // should have an email string, importance ....
  emails = [
    {email: 'bill@gates.com', importance: true, subject: 'New Windows',
    content: 'Windows XI will launch in year 2100'},
    {email: 'ada@lovelace.com', importance: true, subject: 'Programming',
    content: 'Enchantress of Numbers'},
    {email: 'John@carmac.com', importance: false, subject: 'Algo',
    content: 'Enchantress of Numbers'},
    {email: 'ada@lovelace.com', importance: false, subject: 'Programming',
    content: 'Enchantress of Numbers'}
  ];
}

