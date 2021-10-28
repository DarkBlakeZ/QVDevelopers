import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { login } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  url:string = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  login(data: login){
    return this.http.post(this.url+'loginUser', data);
  }


}
