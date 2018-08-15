import { Component } from '@angular/core';
import {User} from './models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registration';
  user:User = new User();
  // newUser:User = new User();
  users:Array<User> = [];
  form_submitted:Boolean = false;

  onSubmit(event:Event,form:NgForm){
    event.preventDefault(); // stop the form from refreshing each time submit is pressed.
    // console.log("submitting", this.user);
    this.users.push(this.user);
    // this.newUser = this.user;
    // console.log('users',this.users);
    this.user = new User();
    form.reset();
    this.form_submitted = true;
  }
}
