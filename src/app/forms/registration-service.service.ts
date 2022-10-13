import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http: HttpClient) { }

  _url = "here we have to pass the api";

  register(userData){
    return this.http.post<any>(this._url, userData);
  }
}
