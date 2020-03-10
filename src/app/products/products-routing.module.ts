import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Routes, RouterModule } from '@angular/router';

// config the routes
const routes: Routes = [
  {
    path: 'products', children: [
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: ':id', component: ProductDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
