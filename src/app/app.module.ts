import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './routes/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './routes/login/login.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './routes/home/home.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import localeFr from '@angular/common/locales/fr';
import { AddOrderComponent } from './routes/add-order/add-order.component';
import { SuccessOrderComponent } from './routes/success-order/success-order.component';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';


registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AddOrderComponent,
    SuccessOrderComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule,
        RouterModule.forRoot([
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: '', component: HomeComponent},
            {path: 'order/add', component: AddOrderComponent},
            {path: 'order/add/success', component: SuccessOrderComponent},
        ],
          { useHash: true }),
      NgxDatatableModule,
      FormsModule,
    ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
