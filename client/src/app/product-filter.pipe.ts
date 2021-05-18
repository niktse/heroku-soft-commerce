import { ProductModel } from './models/productModel';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products:ProductModel[] , searchTerm:string): ProductModel[] {
    if (!products || !searchTerm){
      return products;
    }else
    {
      return products.filter(product => 
        product.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
  }

}
