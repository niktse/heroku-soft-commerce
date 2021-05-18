import { environment } from './../environments/environment';
import { ProductModel } from './models/productModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';






@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 private apiServerUrl = environment.apiServerUrl;
  
  constructor( private http:HttpClient) { }

  getProducts(): Observable<ProductModel[]>{
  return this.http.get<ProductModel[]>(`${this.apiServerUrl}products`);
  }

  getProductById(id: string): Observable <ProductModel>{
    return this.http.get<ProductModel>(`${this.apiServerUrl}products/${id}`)
  }

  deleteProduct(id:string): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}${id}`)
  }

  



  





  }
  

