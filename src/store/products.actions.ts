import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/products/product';

export const getAllProductList = createAction(
  '[Product List] get all products list'
);
export const getAllProductListSuccess = createAction(
  '[Product List] Get all products list success',
  props<{ products: IProduct[] }>()
);
