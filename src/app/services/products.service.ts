import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product, productEdit } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = 'http://localhost:2000/' 

  constructor(private http: HttpClient) { 

  }

  getProducts(id = '0'){

    return this.http.get(`${this.url}product/${id}`);
  }

  createProduct(data:product){
    return this.http.post(`${this.url}product`, data);
  }
  
  deleteProduct(id:string){
    return this.http.delete(`${this.url}product/${id}`);
  }

  editProduct(data:productEdit){
    return this.http.put(`${this.url}product`, data);
  }



  
}
