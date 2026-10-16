import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { FeatureComponent } from './components/feature.component';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    HomeProductCardComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    CategoryProductComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    OrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatIcon,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    SharedModule
],
  exports : [
    FeatureComponent,
    HomeComponent,
    HomeProductCardComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    CategoryProductComponent
  ]
})
export class FeatureModule { }
