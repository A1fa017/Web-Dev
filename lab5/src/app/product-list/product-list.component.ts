import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../categories';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [...products];
  category: Category | undefined;

  constructor(private activRoute: ActivatedRoute){
  }
  ngOnInit(){
    const routerData = this.activRoute.snapshot.paramMap;
    const categoryFromRoute = (routerData.get('category_name'))
    console.log(routerData)
    console.log(categoryFromRoute)
    this.products = products.filter(item=>item.category===categoryFromRoute)
    console.log(this.products)
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/