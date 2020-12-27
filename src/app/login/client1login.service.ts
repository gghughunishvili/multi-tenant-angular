import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class Client1LoginService extends LoginService {

  constructor() {
    super();
  }

  login(username: string, password: string) : boolean {
    localStorage.setItem('token', 'some-token-here');
    return true;
  }
}
