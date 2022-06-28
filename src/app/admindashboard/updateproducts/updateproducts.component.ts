import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../../category.service';
import { Analgesics } from './../../analgesics/model/analgesics';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit {

  analgesics! : Analgesics[];
  analgesicsData = new Analgesics();
  updateAnalg : Analgesics = new Analgesics();
  id! : number
  msg = '';

  alert : boolean = false
  formFields = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    price : new FormControl('')
  })

  constructor( private categoryService : CategoryService,
                private activatedRoute : ActivatedRoute,
                private router : Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']

    this.categoryService.getUpdateItemById(this.id).subscribe(data => {
      this.updateAnalg = data;
    }, error => console.log(error));
  }

  updateItem()
  {
    this.categoryService.updateItem(this.id, this.updateAnalg).subscribe(data => {
      this.msg = "Item Updated Successfully";
      this.alert = true;
      this.formFields.reset({})
    })
  
  }

  closeAlert()
  {
    this.alert = false;
  }

  goToAdminProducts()
  {
    this.router.navigate(['/admin-products'])
  }

}
