import { CheckoutComponent } from './cart/checkout/checkout.component';
import { UpdateproductsComponent } from './admindashboard/updateproducts/updateproducts.component';
import { AdminproductsComponent } from './admindashboard/adminproducts/adminproducts.component';
import { CartComponent } from './cart/cart.component';
import { AddAnalgesicsComponent } from './analgesics/additem/add-analgesics/add-analgesics.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AnalgesicsComponent } from './analgesics/analgesics.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'user-dashboard', component : UserdashboardComponent},
  { path : 'admin-dashboard', component : AdmindashboardComponent},
  { path : 'new-user-registration', component : RegistrationComponent},
  { path : 'user-login', component : LoginComponent},
  { path : 'admin-login', component : AdminLoginComponent},
  { path : 'header', component : HeaderComponent},
  { path : 'analgesics', component : AnalgesicsComponent},
  { path : 'add-analgesics', component : AddAnalgesicsComponent},
  { path : 'add-to-cart/:name', component : CartComponent},
  { path : 'add-to-cart', component : CartComponent},
  { path : 'admin-products', component : AdminproductsComponent},
  { path : 'update-products/:id', component : UpdateproductsComponent},
  { path : 'checkout', component : CheckoutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
