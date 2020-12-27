import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantService } from '../tenant/tenant.service';
import { getLoginService, LoginService } from './login.service';
import { Client1LoginService } from './client1login.service';
import { Client2LoginService } from './client2login.service';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: LoginService,
      useFactory: getLoginService,
      deps: [TenantService, Client1LoginService, Client2LoginService]
    }
  ]
})
export class LoginModule { }
