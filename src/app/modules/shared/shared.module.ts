import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SharedComponent } from './components/shared.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarContentComponent,
    SharedComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemsComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemsComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ]
})
export class SharedModule { }
