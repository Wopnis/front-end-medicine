import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  name!: string;
  lastname!: string;
  position!: string;
  email!: string;
  login!: string;
  password!: string;

  constructor(
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    const user = {
      name: this.name,
      lastname: this.lastname,
      position: this.position,
      email: this.email,
      login: this.login,
      password: this.password
    }
    if(!user.name){
      this._flashMessagesService.show('Введите Ваше имя?', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    else if(!user.lastname){
      this._flashMessagesService.show('Введите Вашу фамилию?', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    else if(!user.position){
      this._flashMessagesService.show('Введите Вашу должность?', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    else if(!user.login){
      this._flashMessagesService.show('Введите Ваш логин?', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    else if(!user.email){
      this._flashMessagesService.show('Введите Ваш электронный адрес?', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    else if(!user.password){
      this._flashMessagesService.show('Введите Ваш пароль?', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    this.authService.regUser(user).subscribe(data => {
      if(!data.success){
        this._flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/reg'])
      }else {
        this._flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/auth'])
      }
    })
    return false
  }


}
