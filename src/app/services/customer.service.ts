import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SettingsService} from "../configuration/settings-service.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient, private settings: SettingsService) { }

  configUrl = this.settings.getConfigUrl();

  getAll() {
    return this.http.get(this.configUrl + '/api/customers');
  }
}
