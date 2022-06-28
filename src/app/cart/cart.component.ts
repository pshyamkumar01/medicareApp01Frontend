import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartService } from './service/cart.service';
import { Analgesics } from './../analgesics/model/analgesics';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  name! : string;
  analgesics = new Analgesics();

  public products : any = [];
  public grandTotal! : number;

  constructor( private activatedRoute : ActivatedRoute,
              private categoryService : CategoryService,
              private cartService : CartService,
              private router : Router,
              private httpClient : HttpClient) { }

  ngOnInit(): void {
  
    this.cartService.getProducts().subscribe(res=>{
      this.products = res;

      this.grandTotal = this.cartService.getTotalPrice();
    })  
  }
  
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  gotoAnalgesics(){
    this.router.navigate(['/analgesics'])
  }

  public saveToCart(analgesics : Analgesics) : Observable<object>{
    return this.httpClient.post('http://localhost:8086/add-to-cart', analgesics);
  }

  gotoCheckout()
  {
    this.router.navigate(['/checkout'])
  }
  
}
