import { Component } from '@angular/core';
import {UserInfo} from '../Models/registrationinfo'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  NewUser: UserInfo = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  };

  passwordconfirm: string;

  submit(): void {
    if (this.NewUser.password != this.passwordconfirm)
      alert("Passwords are not valid");
    //TODO: call login function from services
  }

}
