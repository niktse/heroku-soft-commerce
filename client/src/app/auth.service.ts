import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UserModel} from './models/userModel'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiServerUrl;
  constructor(private http:HttpClient) { }

  loginUser(user:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${this.apiServerUrl}users`,user)
  }





}
