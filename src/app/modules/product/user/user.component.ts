import { Component } from '@angular/core';
import {ProductService} from "../product.service";
import {fadeInDownOnEnterAnimation, fadeOutUpOnLeaveAnimation} from "angular-animations";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation({anchor: 'enter', duration: 1000, translate: '30px'}),
    fadeOutUpOnLeaveAnimation({anchor: 'leave', duration: 400, translate: '30px'}),
  ],
})
export class UserComponent {
  categories: any[] = [];
  products: any[] = [];
  selectedCategory = '';
  isLoading = false
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getCategories().subscribe((categories: any[]) => {
      console.log(categories)
      this.categories = categories
      this.selectedCategory = 'all'
     this.changeCategory()
    });

  }
  changeCategory() {
    this.isLoading = true
    if(this.selectedCategory  !== 'all'){
      this.productService.getProductsByCategory(this.selectedCategory).subscribe((products: any[]) => {
        this.products = products
        this.isLoading = false
      });
    } else {
      this.productService.getAllProducts().subscribe((products: any[]) => {
        this.products = products
        this.isLoading = false

      })
    }

  }
}
