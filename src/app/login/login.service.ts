
import { TenantService, Tenant } from "../tenant/tenant.service";
import { Client1LoginService } from './client1login.service';
import { Client2LoginService } from './client2login.service';

export function getLoginService(
  tenantService: TenantService,
  client1LoginService: Client1LoginService,
  Client2LoginService: Client2LoginService
): LoginService {
  if (tenantService.getTenant() === Tenant.CLIENT1) {
    return client1LoginService;
  } else if (tenantService.getTenant() === Tenant.CLIENT2) {
    return Client2LoginService;
  }

  throw new Error("Unknown tenant for login service");
}


export abstract class LoginService {
  constructor() { }
  abstract login(username: string, password: string): boolean;
}
