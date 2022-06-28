import { CartService } from './../cart/service/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { Analgesics } from './model/analgesics';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analgesics',
  templateUrl: './analgesics.component.html',
  styleUrls: ['./analgesics.component.css']
})
export class AnalgesicsComponent implements OnInit {

  analgesics! : Analgesics[];
  id! : number;
  analgesicsName = new Analgesics();

  constructor(private httpClient : HttpClient,
               private categoryService : CategoryService,
               private router : Router,
               private activatedRoute : ActivatedRoute,
               private cartService : CartService) { }

  ngOnInit(): void {

    this.getAnalgesicsList();

  }

  getAnalgesicsList()
  {
    this.categoryService.getAnalgesicsList().subscribe(data =>{
      this.analgesics = data;

      this.analgesics.forEach((a : any)=>{
        Object.assign(a, {quantity : 1, total : a.price});
      })
    })
  }

  getItem(id : number)
  {
    this.categoryService.getItemById(id).subscribe(data =>{
    this.analgesicsName = data;
    console.log(this.analgesicsName.name);

    this.categoryService.saveToCart(this.analgesicsName).subscribe(data =>{
      
    })
    })
    
  }

  addtocart(item : any){

    this.cartService.addtoCart(item);
  }

}
