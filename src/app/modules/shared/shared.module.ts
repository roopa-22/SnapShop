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



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarContentComponent,
    SharedComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarContentComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
