import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
   {path:"",component:AdminComponent,children:[
      {path:"",component:DashboardComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
