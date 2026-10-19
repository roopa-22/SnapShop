import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
   {path:"",component:AdminComponent,children:[
      {path:"",component:DashboardComponent},
      {path:"products",component:AdminProductsComponent},
      {path:"orders",component:AdminOrdersComponent},
      {path:"customers",component:CustomersComponent},
      {path:"add-product",component:AddProductComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
