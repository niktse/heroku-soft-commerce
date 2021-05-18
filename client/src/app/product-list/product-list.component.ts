
import { ProductModel } from '../models/productModel';
import {  ProductsService } from '../products.service';
import { Component, Input, OnInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: ProductModel[] = [];
searchTerm: string;
@Input() apiServerUrl = environment.apiServerUrl;





  constructor( private ProductsService: ProductsService, ) {}

  ngOnInit(): void {
    this.ProductsService.getProducts()
    .subscribe(products => {
      this.products = products

    } )
    
    
  }



  
  }





