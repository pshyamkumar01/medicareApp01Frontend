import { Analgesics } from './../../analgesics/model/analgesics';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout : Analgesics = new Analgesics();
  msg = '';

  alert : boolean = false
  formFields = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    price : new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  
  }

  closeAlert()
  {
    this.alert = false;
  }

  paymentSuccess()
  {
    this.msg = "Item Updated Successfully";
      this.alert = true;
      this.formFields.reset({})
  }
}
