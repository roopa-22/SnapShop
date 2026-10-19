import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FeatureModule } from './modules/feature/feature.module';
import { SharedModule } from './modules/shared/shared.module';
import { AdminModule } from './modules/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './modules/auth/auth.module';
import { authReducer } from './State/Auth/authReducer';
import { userReducer } from './State/User/userReducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { ProductReducer } from './State/Product/productReducer';
import { CartReducer } from './State/Cart/cartReducer';
import { orderReducer } from './State/Order/orderReducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    SharedModule,
    AdminModule,
    AuthModule,
    StoreModule.forRoot(
      {
        auth:authReducer,
        user:userReducer,
        product:ProductReducer,
        cart:CartReducer,
        order:orderReducer
      })
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
