import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8000/v1';
  loggedIn = false; // endpoint của API

  constructor(private httpClient: HttpClient) { }

  isAuthenticated() {
    const promise = new Promise<boolean>((resolve, reject) => {
      let jsonData = localStorage.getItem('user');
      if (jsonData) {
        this.loggedIn = true; // người dùng đã đăng nhập
        resolve(this.loggedIn);
      } else {
        resolve(this.loggedIn); // người dùng chưa đăng nhập
      }
    });
    return promise;
  }

  isAdmin() {
    const promise = new Promise<boolean>((resolve, reject) => {
      let jsonData = localStorage.getItem('user');
      if (jsonData) {
        if (JSON.parse(jsonData).admin == true) {
          this.loggedIn = true; // người dùng là admin
          resolve(this.loggedIn);
        } else {
          resolve(this.loggedIn); // người dùng không phải là admin
        }
      } else {
        resolve(this.loggedIn); // không có dữ liệu đăng nhập
      }
    });
    return promise;
  }

  checkLogin() {
    let jsonData = localStorage.getItem('user')
    if (jsonData) {
      return JSON.parse(jsonData)
    }
    return false
  }

  checkAdmin() {
    let jsonData = localStorage.getItem('user')
    if (jsonData) {
      if (JSON.parse(jsonData).admin === true) {
        return JSON.parse(jsonData)
      }
    }
    return false
  }

  register(body: any) {
    return this.httpClient.post<any>(`${this.url}/account/add`, body)
  }

  login(body: any) {
    
    return this.httpClient.post<any>(`${this.url}/account/login`, body)
  }

  getOrders() {
    const user = this.checkLogin();
    if (!user) return [];
    return JSON.parse(localStorage.getItem(`orders_${user.id}`) || '[]');
  }
}
