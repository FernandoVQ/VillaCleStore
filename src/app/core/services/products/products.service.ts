import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  _url = 'http://localhost:3000/api/products';  
  dataProducts:any; 
  categoria:any = "1"; 
  itemscarrito : any;

  // constructor() { 
  // }
  constructor(private http: HttpClient) { 
  }

  header : HttpHeaders = new HttpHeaders().set('Content-Type', 'aplication/json')

  getProducts(){    
    return this.http.get(this._url)
  }

  getProductXId(id:string, products){
    return products.find( item => id === item.id)
  }

}
