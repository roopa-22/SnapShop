import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/feature/components/home/home.component';
import { CategoryProductComponent } from './modules/feature/components/category-product/category-product.component';
import { CartComponent } from './modules/feature/components/cart/cart.component';
import { ProductDetailsComponent } from './modules/feature/components/product-details/product-details.component';
import { CheckoutComponent } from './modules/feature/components/checkout/checkout.component';
import { PaymentComponent } from './modules/feature/components/payment/payment.component';
import { PaymentSuccessComponent } from './modules/feature/components/payment-success/payment-success.component';
import { OrderComponent } from './modules/feature/components/order/order.component';
import { OrderDetailsComponent } from './modules/feature/components/order-details/order-details.component';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"product-details/:id",component:ProductDetailsComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"checkout/payment/:id",component:PaymentComponent},
  {path:':lavelOne/:lavelTwo/:lavelThree',component:CategoryProductComponent},
  {path:"payment-success",component:PaymentSuccessComponent},
  {path:"account/orders",component:OrderComponent},
  {path:"order/:id",component:OrderDetailsComponent},
  {path:"admin",loadChildren:()=>import("./modules/admin/admin-routing.module").then(m => AdminRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
