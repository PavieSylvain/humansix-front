import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../../entity/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) { }
  civilities: any;

  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
    ]),
    lastname: new FormControl('', [
      Validators.required,
    ]),
    pseudo: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
    ]),
    civility: new FormControl('', [
      Validators.required,
    ]),
    birthAt: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    this.userService.getAllCivility().subscribe(res =>{
      let data:any = res;
      this.civilities = data["hydra:member"];
    });
  }

  onSubmit() {
    let data = this.registerForm.value;
    let user = new User(data.pseudo, data.password, data.civility, data.firstname, data.lastname, data.birthAt, data.email);

    if(this.registerForm.status != "VALID"){
      alert("!! Le formulaire n'est pas valide, tous les champs sont obligatoire !!");
    } else {
        let res = this.userService.register(user);
        console.log(res);

    }
  }
}
