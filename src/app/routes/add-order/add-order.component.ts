import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {CustomerService} from "../../services/customer.service";
import {AuthService} from "../../security/auth.service";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  customers: any;
  products: any;
  cart: any[] = [];
  selectedProduct: any;
  isLoggedIn = false;

  form = new FormGroup({
    customer: new FormControl('', [
      Validators.required,
    ]),
    status: new FormControl('', [
      Validators.required,
    ]),
  });
  productQuantity: any;
  total: number = 0;

  constructor(private productService: ProductService, private customerService: CustomerService,
              private authService: AuthService, private orderService: OrderService) { }

  ngOnInit(): void {
    /* login verification */
    if (this.authService.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.authService.redirectionLogin();
    }

      this.customers = this.customerService.getAll().subscribe(res =>{
        let data:any = res;
        this.customers = data["hydra:member"];
        console.log(this.customers);
      });
      this.products = this.productService.getAll().subscribe(res =>{
        let data:any = res;
        this.products = data["hydra:member"];
      });
  }

  addProduct() {
    let product = this.products[this.selectedProduct];
    let total = this.productQuantity * product.price;

    this.cart.push({"product": product, "quantity": this.productQuantity, "total": total});
    this.calcTotal();
  }

  removeProduct(index: number) {
    this.cart.splice(index, 1);
    this.calcTotal();
  }

  calcTotal(){
    this.total = 0;
    this.cart.forEach(element =>{
      this.total += element.total;
    });
  }

  onSubmit() {
    let data = this.form.value;
    let order = {
      "customer": this.customers[data.customer],
      "status": data.status,
      "price": this.total,
      "cart": this.cart,
    }

    console.log(order);
    this.orderService.add(order);
  }


}
