import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  productList: any[];

  constructor( private productService: ProductsService, private cartDataService: CartDataService) { }

  ngOnInit() {
    this.productList = this.productService.getProductList();
  }

  addToCartHandler( pdt ) {
    console.log(pdt);
    this.cartDataService.updateCart( pdt );
  }
}
