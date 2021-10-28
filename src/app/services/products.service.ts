import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product, productEdit } from '../models/product.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = environment.apiUrl;

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
