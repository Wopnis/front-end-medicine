import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any
  token: any



  constructor(
    private http: Http
    ) { }

    regUser(user: any){
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      return this.http.post('http://localhost:3000/account/reg', user, {headers: headers})
      .pipe(map(res => res.json()))
    }
    authUser(user:any){
      let headers = new Headers()
      headers.append('Content-Type', 'application/json')
      return this.http.post('http://localhost:3000/account/auth', user, {headers: headers})
      .pipe(map(res => res.json()))
    }
    saveUser(token:any,user:any){
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))

      this.token = token
      this.user = user
    }
    logout(){
      this.token = null
      this.user = null
      localStorage.clear()
    }
    isloggedIn(): boolean{
      return !!this.token
    }

}
