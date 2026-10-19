import { Component } from '@angular/core';
import { womensareeData } from '../../../../../Data/Women/women_saree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  selectedSize : any;
  reviews = [1,1,1,1,1]
  relatedProducts : any

  constructor(private router:Router) {

  }

  ngOnInit() {
    this.relatedProducts = womensareeData
  }


  handleAddToCart() {
    console.log("select size",this.selectedSize)
    this.router.navigate(['cart'])
  }
}
