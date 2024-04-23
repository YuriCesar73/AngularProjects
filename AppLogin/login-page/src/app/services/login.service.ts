import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private readonly API_URL = "http://localhost:8080/auth/login"

  constructor(private httpClient: HttpClient) { }


  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.API_URL, {email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }

}

