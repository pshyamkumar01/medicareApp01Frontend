import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { AnalgesicsComponent } from './analgesics/analgesics.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AntiparkinsonComponent } from './antiparkinson/antiparkinson.component';
import { HormonalComponent } from './hormonal/hormonal.component';
import { AddAnalgesicsComponent } from './analgesics/additem/add-analgesics/add-analgesics.component';
import { AddAntiparkinsonComponent } from './antiparkinson/additem/add-antiparkinson/add-antiparkinson.component';
import { AddHormonalComponent } from './hormonal/additem/add-hormonal/add-hormonal.component';
import { AdminproductsComponent } from './admindashboard/adminproducts/adminproducts.component';
import { UpdateproductsComponent } from './admindashboard/updateproducts/updateproducts.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    AnalgesicsComponent,
    AdminLoginComponent,
    AntiparkinsonComponent,
    HormonalComponent,
    AddAnalgesicsComponent,
    AddAntiparkinsonComponent,
    AddHormonalComponent,
    AdminproductsComponent,
    UpdateproductsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
