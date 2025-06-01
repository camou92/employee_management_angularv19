import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginData, Register, RegisterResponse } from '../models/user.model';

const AUTH_BASE_URL = 'http://localhost:5000/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private http = inject(HttpClient)
  constructor() { }

  private _isConnected = signal(!!this.getAuthToken())
  isConnected = this._isConnected.asReadonly();

  register(body: Register){
    return this.http.post<RegisterResponse>(`${AUTH_BASE_URL}/register`, body)
  }

  login(data: LoginData){
    return this.http.post<{token: string}>(`${AUTH_BASE_URL}/login`, data)
  }

  logOut(){
    localStorage.removeItem('token');
    this._isConnected.set(false)
  }

  saveAuthToken(token: string) {
    localStorage.setItem('token', token)
    this._isConnected.set(true)
  }

  getAuthToken() {
    return localStorage.getItem("token")
  }
}
