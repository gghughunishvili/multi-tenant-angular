import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class Client2LoginService extends LoginService {

  constructor() {
    super();
  }

  login(username: string, password: string) : boolean {
    return true;
  }
}
