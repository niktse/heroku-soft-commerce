import { ProductsService } from '../products.service';
import { ProductModel } from './../models/productModel';
import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
isLoading : boolean = true;
  product: ProductModel;
  @Input() apiServerUrl = environment.apiServerUrl;
  

constructor(
    private route : ActivatedRoute,
    private productService :ProductsService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(id)
    .subscribe(product=>{
      this.product = product;
      this.isLoading = false;
    })

    
  }

  public DeleteProduct(id:string):void{
    this.productService.deleteProduct(id)
    .subscribe((Response:void)=>{
      console.log(Response);
    })
    alert('Your order is complete')
  }

  
}
