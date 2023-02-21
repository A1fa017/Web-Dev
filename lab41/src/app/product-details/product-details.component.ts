import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(rivate route: ActivatedRoute,
    private cartService: CartService) {}
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to cart!');
  }

}
ngOnInit() {

  const routeParams = this.route.snapshot.paraMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  this.product = product.find(product => product.id === productIdFromRoute);
}