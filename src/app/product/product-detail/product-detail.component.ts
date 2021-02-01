import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.product =  this.productService.getProductById(params.get('productId'))
      const productObservable = this.productService.getProductById(params.get('productId'))
      productObservable.subscribe(
        (data) => {
          this.product = data
        },
        (err) => {

        }
      )
    })
  }
}


// ngOnInit() {
//   this.route.paramMap.subscribe(params => {
//     this.product =  products[+Number(params.get('productId'))]
//   })
// }

//下だと+params.get('productId')でエラーになる
// ngOnInit() {
//     this.route.paramMap.subscribe(params => {
//     this.product =  products[+params.get('productId')]
//   })
// }