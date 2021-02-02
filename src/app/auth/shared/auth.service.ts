import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  // getProducts(): Observable<any> {
  // return this.http.get('/api/v1/products')
  //     // return products
  // }

  // getProductById(productId: any): Observable<any>{
  //   return this.http.get('/api/v1/products/' + productId)
  //   // return products[productId]
  // }
}