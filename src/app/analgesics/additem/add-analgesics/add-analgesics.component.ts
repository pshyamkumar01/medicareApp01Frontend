import { Router } from '@angular/router';
import { CategoryService } from './../../../category.service';
import { Analgesics } from './../../model/analgesics';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-analgesics',
  templateUrl: './add-analgesics.component.html',
  styleUrls: ['./add-analgesics.component.css']
})
export class AddAnalgesicsComponent implements OnInit {

  alert : boolean = false
  formFields = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    price : new FormControl('')
  })

  analgesics = new Analgesics();
  msg = '';
  constructor( private categoryService : CategoryService,
                private router : Router) { }

  ngOnInit(): void {
  }
  addNewItem()
  {
    this.categoryService.addNewItem(this.analgesics).subscribe(data =>{
      console.log(data);
      this.msg = "Item added Successfully";
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
