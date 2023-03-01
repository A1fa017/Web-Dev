import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../categories';
import { Product, products } from '../products';

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
    this.products = products.filter(item=>item.category===categoryFromRoute)
  }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  removeItem(id:number){
    this.products = this.products.filter(item=>item.id!==id)
  }
  like(item:Product){
    item.like++
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/