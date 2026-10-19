import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddProductComponent } from './components/add-product/add-product.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    CustomersComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
