import { CategoryService } from './../category.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  analgesics()
  {
    this.router.navigate(['/analgesics']);
  }
}
