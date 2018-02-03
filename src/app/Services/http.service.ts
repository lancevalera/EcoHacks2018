import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class HttpService {

  url: string = environment.url;

  constructor(private _http: HttpClient) { }

  //TODO: append endpoints to url
  Login(UserInfo): Observable<any> {
    return this._http.post(this.url, UserInfo);
  }

  Submit(NewUser): Observable<any> {
    return this._http.post(this.url, NewUser);
  }

}
