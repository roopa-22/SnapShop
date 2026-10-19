import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/baseApi";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { addItemToCartFailure, addItemToCartSuccess, getCartFailure, getCartSuccess, removeCartItemFailure, removeCartItemSuccess, updateCartItemFailure, updateCartItemSuccess } from "./cartAction";
import { catchError, map, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CartService {
    API_BASE_URL = BASE_API_URL;

    constructor(
        private store : Store,
        private http : HttpClient,
        private router : Router,
        private route : ActivatedRoute
    ) {}

    addItemToCart(reqData:any) {
        return this.http.put(`${this.API_BASE_URL}/api/cart/add`,reqData).pipe(
            map((data:any) => {
                console.log("Added Item ", data)
                return addItemToCartSuccess({payload:data})
            }),
            catchError((error:any) => {
                return of(addItemToCartFailure(error.response && 
                    error.response.data.message ? error.response.data.message : error.message))
            })
        ).subscribe((action) => this.store.dispatch(action));
    }

    getCart() {
        return this.http.get(`${this.API_BASE_URL}/api/cart/`).pipe(
            map((data:any) => {
                console.log("Cart Data ", data);
                return getCartSuccess({payload:data})
            }),
            catchError((error:any) => {
                return of(getCartFailure(error.response &&
                    error.response.data.message ? error.response.data.message : error.message)) 
            })
        ).subscribe((action) => this.store.dispatch(action));
    }

    updateCartItem(reqData : any) {
        return this.http.put(`${this.API_BASE_URL}/api/cart_items/${reqData.cartItemId}`,reqData.data).pipe(
            map((data:any) => {
                console.log("update cart ",data)
                return updateCartItemSuccess({payload:data})
            }),
            catchError((error:any) => {
                return of(updateCartItemFailure(error.response &&
                    error.response.data.message ? error.response.data.message : error.message))
            }) 
        ).subscribe((action) => this.store.dispatch(action));
    }

    removeCartItem(cartItemId : Number) {
        return this.http.delete(`${this.API_BASE_URL}/api/cart_items/${cartItemId}`).pipe(
            map((data:any) => {
                return removeCartItemSuccess({cartItemId})
            }),
            catchError((error : any) => {
                return of(removeCartItemFailure(error.response &&
                    error.response.data.message ? error.response.data.message : error.message))
            })
        ).subscribe((action) => this.store.dispatch(action));
    }
}