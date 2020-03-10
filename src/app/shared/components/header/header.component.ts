import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header', // element selector
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {
  // ts
  cartItemsCount: number;
  constructor( private router: Router, private cartDataService: CartDataService) { }

  ngOnInit() {
    this.cartDataService.latestCartItems.subscribe( (cartItemsList: any[] ) =>{
      console.log(cartItemsList);
      this.cartItemsCount = cartItemsList.length;
    });
  }

  gotoCartPage() {
    this.router.navigate(['products', 'cart']);
  }

}
