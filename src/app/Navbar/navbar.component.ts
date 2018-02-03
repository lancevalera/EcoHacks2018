import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  router: any;
  constructor(private _router: Router) {
    this.router = _router;
  }
}
