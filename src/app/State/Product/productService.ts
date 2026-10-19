import { Injectable } from "@angular/core";
import { BASE_API_URL } from "../../config/baseApi";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { catchError, map, of } from "rxjs";
import { findProductsByCategorySuccess, findProductsByCategoryFailure, findProductByIdSuccess, findProductByIdFailure} from "./productAction";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    API_BASE_URL = BASE_API_URL;

    constructor(
        private store : Store,
        private http: HttpClient,
        private router: Router,
        private route : ActivatedRoute
    ) {}

    findProductsByCategory(reqData:any) {
        const {colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize} = reqData;

        let params = new HttpParams().set('color',colors)
                                .set('size',sizes)
                                .set('minPrice',minPrice)
                                .set('maxPrice',maxPrice)
                                .set('minDiscount',minDiscount)
                                .set('category',category)
                                .set('stock',stock)
                                .set('sort',sort)
                                .set('pageNumber',pageNumber)
                                .set('pageSize',pageSize);

        return this.http.get(`${this.API_BASE_URL}/api/products`,{params}).pipe(
            map((data:any) => {
                console.log("products data",data);
                    return findProductsByCategorySuccess({payload:data})
            }),
            catchError((error:any) => {
                return of(findProductsByCategoryFailure(
                    error.response && error.response.data.message ?
                    error.response.data.message : error.message
                ))
            })
        ).subscribe((action) => this.store.dispatch(action));                     
    }

    findProductsById(productId:any) {
     
        return this.http.get(`${this.API_BASE_URL}/api/products/id/${productId}`).pipe(
            map((data:any) => {
                console.log("product details",data);
                    return findProductByIdSuccess({payload:data})
            }),
            catchError((error:any) => {
                return of(findProductByIdFailure(
                    error.response && error.response.data.message ?
                    error.response.data.message : error.message
                ))
            })
        ).subscribe((action) => this.store.dispatch(action));                      
    }
}


