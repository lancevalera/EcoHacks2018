import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router: any;
  constructor(private _router: Router){
    this.router = _router;
  }

  submit(): void {
    //TODO: call login function from services
    this.router.navigate(['/home'])
  }
}
