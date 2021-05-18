
import { ProductModel } from '../models/productModel';
import {  ProductsService } from '../products.service';
import { Component, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: ProductModel[] = [];
searchTerm: string;






  constructor( private ProductsService: ProductsService, ) {}

  ngOnInit(): void {
    this.ProductsService.getProducts()
    .subscribe(products => {
      this.products = products

    } )
    
    
  }



  
  }

