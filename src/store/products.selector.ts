import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import * as fromProducts from './products.reducer';

export const selectProductsState = createFeatureSelector<AppState>(
  fromProducts.productsFeatureKey
);

export const selectProductsList = createSelector(
  selectProductsState,
  (state: AppState) => state.productList
);

export const selectSignInDetails = createSelector(
  selectProductsState,
  (state: AppState) => state.signinDetails
);

export const isValidUserDetails = createSelector(
  selectProductsState,
  (state: AppState) => state.isValidUser
);
