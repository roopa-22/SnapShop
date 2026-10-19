import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/baseApi";
import { Store } from "@ngrx/store";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { createOrderFailure, createOrderSuccess, getOrderByIdFailure, getOrderByIdSuccess } from "./orderActions";
import { catchError, map, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    API_BASE_URL = BASE_API_URL

    constructor(
       private store : Store,
       private http : HttpClient,
       private router : Router,
       private route : ActivatedRoute 
    ){}

    createOrder(reqData:any) {
        return this.http.post(`${this.API_BASE_URL}/api/orders/`,reqData).pipe(
            map((data:any) => {
                console.log("Created Order ", data);
                if(data.id) {
                    this.router.navigate([`/checkout/payment/${data.id}`], {
                        queryParams : {step: '3', order_id: data.id}
                    });
                }
                console.log('created order -',data);
                return createOrderSuccess({payload:data});
            }),
            catchError((error : any) => {
                return of(createOrderFailure(error.response && 
                    error.response.data.message ? error.response.data.message : error.message))
            })
        ).subscribe((action) => this.store.dispatch(action));
    }


    getOrderById(orderId : string) {
        return this.http.get(`${this.API_BASE_URL}/api/orders/${orderId}`).pipe(
            map((data:any) => {
                console.log("order by id : ", data);
                return getOrderByIdSuccess({payload:data});
            }),
            catchError((error:any) => {
                return of(getOrderByIdFailure(error.message && 
                    error.response.data.message ? error.response.data.message : error.message))
            })
        ).subscribe((action) => this.store.dispatch(action));
    }

    getOrderHistory() {
        return this.http.get(`${this.API_BASE_URL}/api/orders/user`).pipe(
            map((data:any) => {
                console.log("order history ", data);
                return getOrderByIdSuccess({payload:data});
            }),
            catchError((error:any) => {
                return of(getOrderByIdFailure(error.message && 
                    error.response.data.message ? error.response.data.message : error.message))
            })
        ).subscribe((action) => this.store.dispatch(action));
    }

    
}