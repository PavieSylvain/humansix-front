import {Component, AfterViewInit, OnInit} from '@angular/core';
import {AuthService} from "../../security/auth.service";

@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.css']
})
export class SuccessOrderComponent implements AfterViewInit {

  constructor(private authService: AuthService) { }

  ngAfterViewInit(): void {
    setTimeout(() =>
      {
        this.authService.redirectionHome();
      },
      5000);
  }


}
