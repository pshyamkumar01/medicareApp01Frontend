import { Router } from '@angular/router';
import { Analgesics } from './../../analgesics/model/analgesics';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {

  analgesics! : Analgesics[];
  analgesicsData = new Analgesics();

  constructor(private categoryService : CategoryService,
              private router : Router) { }

  ngOnInit(): void {

    this.getAnalgesicsList();
  }

  getAnalgesicsList()
  {
    this.categoryService.getAnalgesicsList().subscribe(data =>{
      this.analgesics = data;

    })
  }

  goToUpdate(id : number)
  {
    this.router.navigate(['/update-products', id]);
  }  

  deleteItem(id : number)
  {
    this.categoryService.deleteItem(id).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/update-products']);
    })
  }

  addAnalgesics()
  {
    this.router.navigate(['/add-analgesics'])
  }

  goToProducts()
  {
    this.router.navigate(['/admin-products'])
  }

}
