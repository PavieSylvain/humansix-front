import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SettingsService} from "../configuration/settings-service.service";
import {Observable} from "rxjs";
import {User} from "../entity/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private settings: SettingsService) { }

  configUrl = this.settings.getConfigUrl();

  get(userEmail: string) {
    return this.http.post(this.configUrl + '/user/getUserByEmail',  {"email": userEmail});
  }

  getAllCivility(){
    return this.http.get(this.configUrl + '/api/civilities');
  }

  register(user: User){
    return this.http.post(this.configUrl + '/register', user).subscribe(
      data => console.log("success", data),
      error => console.log("error", error)
    );
  }

  login(email: string, password: string) {
    let data = {"username": email, "password": password }
    return this.http.post(this.configUrl + '/api/login_check', data).subscribe(
      data => console.log("success", data),
      error => console.log("error", error)
    );
  }
}
