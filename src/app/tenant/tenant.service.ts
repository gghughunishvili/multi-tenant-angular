import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor() { }

  getTenantForHostname(hostname: string): Tenant {
    return this.getTenantForHost(hostname.split(".")[0]);
  }

  getTenantForString(str: string) {
    for (const e in Tenant) {
      if (e.toLowerCase() === str.toLowerCase()) {
        return Tenant[e] as Tenant;
      }
    }
    return null;
  }

  getTenantForHost(host: string): Tenant {
    return this.getTenantForString(host);
  }

  getTenant(): Tenant {
    return this.getTenantForHostname(location.hostname);
  }

  addTenantToHeaders(headers: HttpHeaders): HttpHeaders {
    return headers.append('X-Tenant-ID', this.getTenant());
  }
}

export enum Tenant {
  CLIENT1 = "client1",
  CLIENT2 = "client2"
}
