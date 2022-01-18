import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SettingsService} from "../configuration/settings-service.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient, private settings: SettingsService, private router: Router) { }

  configUrl = this.settings.getConfigUrl();

  getAll() {
    return this.http.get(this.configUrl + '/api/orders');
  }

  add(order: any){
    return this.http.post(this.configUrl + '/orders/add', {"order": order}).subscribe(
      data => {
        console.log("success", data)
        this.router.navigate(['/order/add/success']).then(r => {});
      },
      error => console.log("error", error)
    );
  }
}
