import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user, userCreate, userUpdate } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string = environment.apiUrl;

  constructor(private http: HttpClient) { 

  }

  getUsers(id:string = '0'){
    return this.http.get(this.url+'user/'+id);
  }

  createUser(data:userCreate){
    return this.http.post(this.url+'user', data);
  }
  editUser(data:userUpdate){
    return this.http.put(this.url+'user', data);
  }

  deleteUser(id:string){
    return this.http.delete(this.url+'user/'+id);
  }
  
}
