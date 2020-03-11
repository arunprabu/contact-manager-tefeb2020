import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit, OnDestroy {
  cartItemsList: any[];
  cartSubscription: Subscription;

  constructor(private cartDataService: CartDataService) { }

  ngOnInit() {
    this.cartSubscription = this.cartDataService.latestCartItems.subscribe( (cartItemsList: any[] ) =>{
      console.log(cartItemsList);
      this.cartItemsList = cartItemsList;
    });
  }

  ngOnDestroy() {
    if(this.cartSubscription){
      this.cartSubscription.unsubscribe();
    }
    
  }
}
