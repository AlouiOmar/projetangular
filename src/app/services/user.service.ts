import { Router } from '@angular/router';
import { User } from './../model/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exit } from 'process';
const url = 'http://localhost:3000/users/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private routerInfo: BehaviorSubject<boolean>;
  private user:User=null;
  constructor(private http: HttpClient,private router: Router) { 
    this.routerInfo = new BehaviorSubject<boolean>(false);
  }





auth(email,password){

  console.log('debut auth')
    const users= this.http.get<User[]>(url);

    users.subscribe(users => {
      for( let user of users){
      if(user['email'] === email && user['password'] === password){
        this.user=user;
        localStorage.setItem("user",JSON.stringify(user));
        console.log("ok")
      this.setValue(true);
      }
      }
    });

    return this.routerInfo;
}

public isLoggedIn(): boolean {
  const user = this.getUserDetails();
  if (user) {
    return true;
  } else {
    return false;
  }
}


getUserDetails(){
  return JSON.parse(localStorage.getItem("user"));
}


logout(){
  this.user=null;
  localStorage.removeItem('user');
  this.router.navigateByUrl('auth/login');
}

setValue(newValue): void {
  this.routerInfo.next(newValue);
}
getValue(): Observable<boolean> {
  return this.routerInfo.asObservable();
}
}
