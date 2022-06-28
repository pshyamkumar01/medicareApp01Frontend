import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
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
