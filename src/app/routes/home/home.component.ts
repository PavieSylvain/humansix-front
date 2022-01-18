import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../security/auth.service";
import {OrderService} from "../../services/order.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  orders: any;

  rows:any;
  columns = [
    { prop: 'id', name: "Id Commande" },
    { prop: 'orderDate', name: "date" , pipe: new DatePipe('fr-FR')},
    { name: 'status' },
    { prop: "price", name: "prix"}
  ];

  constructor(private authService: AuthService, private orderService: OrderService) { }

  ngOnInit(): void {
    if(!this.authService.getToken()){
      this.authService.redirectionLogin();
    } else {
      this.user = this.authService.getUser();
      this.orderService.getAll().subscribe(res => {
        let data:any = res;

        this.orders = data["hydra:member"];
        console.log(this.orders);
        this.rows = this.orders;
      })

    }
  }
}
