import { createAction, props } from '@ngrx/store'

export const getUserProfile = createAction('[Auth] Get User')

export const getUserProfileSuccess = createAction('[Auth] Get User Profile Success', props<{userProfile:any}>())    

export const getUserProfileFailure = createAction('[Auth] Get User Profile Failure', props<{error:any}>())

export const logoutSuccess = createAction('[Auth] Logout Success');
