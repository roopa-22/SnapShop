import { createReducer, on } from "@ngrx/store";
import { createOrderFailure, createOrderRequest, createOrderSuccess, getOrderByIdFailure, getOrderByIdRequest, getOrderByIdSuccess, getOrderHistoryFailure, getOrderHistoryRequest, getOrderHistorySuccess } from "./orderActions";

export interface OrderState {
    loading:boolean;
    error: string | null;
    order : string | null;
    orders : any[];
}

export const initialState : OrderState = {
    loading: false,
    error: null,
    order: null,
    orders: []
};

export const orderReducer = createReducer(
    initialState,
    on(createOrderRequest, (state) => ({...state, loading:true, error:null})),
    on(createOrderSuccess, (state, {payload}) => ({...state, loading:false, payload})),
    on(createOrderFailure, (state, {error}) => ({...state, loading:false, error})),
   
    on(getOrderByIdRequest, (state) => ({...state, loading:true, error:null})),
    on(getOrderByIdSuccess, (state, {payload}) => ({...state, loading:false,payload})),
    on(getOrderByIdFailure, (state, {error}) => ({...state, loading:false, error})),

    on(getOrderHistoryRequest, (state) => ({...state, loading:true, error:null})),
    on(getOrderHistorySuccess, (state, {payload}) => ({...state, loading:false, payload})),
    on(getOrderHistoryFailure, (state, {error}) => ({...state, loading:false, error}))
)