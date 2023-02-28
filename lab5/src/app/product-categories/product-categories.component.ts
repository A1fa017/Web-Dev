import { Component } from '@angular/core';
import { categories } from '../categories';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent {
  categories = categories
  items = products;

}