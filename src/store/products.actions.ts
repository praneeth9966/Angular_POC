import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/products/product';

export const getAllProductList = createAction(
  '[Product List] get all products list'
);
export const getAllProductListSuccess = createAction(
  '[Product List] Get all products list success',
  props<{ products: IProduct[] }>()
);

export const signInDetails = createAction(
  '[Sign In] Get all users sign in details'
);

export const isValidUser = createAction(
  '[Log In Log Out] Login Logout the user',
  props<{ userValid: boolean }>()
);
