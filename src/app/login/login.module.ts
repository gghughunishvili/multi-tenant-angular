import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tenant, TenantService } from '../tenant/tenant.service';
import { getLoginService, LoginService } from './login.service';
import { Client1LoginService } from './client1login.service';
import { Client2LoginService } from './client2login.service';
import { Router, Routes } from '@angular/router';



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
export class LoginModule {
  constructor(private router: Router, private tenantService: TenantService) {
    // configure the routes.
    let appRoutes: Routes = [];

    if (this.tenantService.getTenant() === Tenant.CLIENT1) {
      console.log("Configuring CLIENT1 Login Components.");
      appRoutes = [
        // your routes here
      ];
    } else if (this.tenantService.getTenant() === Tenant.CLIENT2) {
      console.log("Configuring CLIENT2 Login Components.");
      appRoutes = [
        // your routes here.
      ];
    }
    appRoutes.forEach(e => this.router.config.unshift(e));
  }
}
