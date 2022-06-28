import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ['../../assets/images/05.jpg','../../assets/images/03.jpg','../../assets/images/04.jpg'];
}
