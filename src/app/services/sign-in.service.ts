import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  url:string = 'http://localhost:2000/' 

  constructor(private http: HttpClient) { 

  }

  login(data: login){
    return this.http.post(this.url+'loginUser', data);
  }


}
