import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  signIn(username, password) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/auth/signin',
      { username: username, password: password },
      httpOptions

    )

  }


  signUp(username, email, password,name) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/auth/signup',
      {
       
        "username":username,
        "name":name,
        "email":email,
        "password":password,
        "role":["pm"]
      },
      httpOptions

    )

  }

  info() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/auth/info',
      
      httpOptions

    )

  }


  logout() {


    

  }





}