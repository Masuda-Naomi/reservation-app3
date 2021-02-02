import { Injectable } from "@angular/core";
// import { products } from 'src/app/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
  return this.http.get('/api/v1/products')
      // return products
  }

  getProductById(productId: any): Observable<any>{
    return this.http.get('/api/v1/products/' + productId)
    // return products[productId]
  }
}