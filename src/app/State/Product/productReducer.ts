import { createReducer, on } from "@ngrx/store"
import { findProductByIdFailure, findProductByIdSuccess, findProductsByCategoryFailure, findProductsByCategoryRequest, findProductsByCategorySuccess } from "./productAction"

const initialState = {
    products:[],
    loading:false,
    error:null,
    productDetails:null
}

export const ProductReducer = createReducer (
    initialState,
    on(findProductsByCategoryRequest, (state) => ({...state, loading:true, error:null})),
    on(findProductsByCategorySuccess, (state,{payload}) => ({
        ...state,
        products:payload,
        content:payload.content,
        loading:false
    })),
    on(findProductsByCategoryFailure,
        findProductByIdFailure, (state,{error}) => ({
        ...state,
        error:error,
        loading:false
    })),
    on(findProductByIdSuccess, (state,{payload}) => ({
        ...state,
        product:payload,
        loading:false
    })),

) 