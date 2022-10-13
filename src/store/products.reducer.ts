import { createReducer, on, Action } from '@ngrx/store';
import * as productsActions from './products.actions';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { AppState } from './app.state';

export const productsFeatureKey = 'products';

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: AppState = adapter.getInitialState({
  productList: [],
});

export const productsReducer = createReducer(
  initialState,
  on(productsActions.getAllProductListSuccess, (state, { products }) => {
    return {
      ...state,
      productList: products,
    };
  })
);
