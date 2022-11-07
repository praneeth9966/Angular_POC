import { createReducer, on, Action } from '@ngrx/store';
import * as productsActions from './products.actions';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { AppState } from './app.state';

export const productsFeatureKey = 'products';

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: AppState = adapter.getInitialState({
  productList: [],
  signinDetails: [
    {
      userName: 'admin',
      userEmail: 'admin@gmail.com',
      password: 'Admin@123',
    },
    {
      userName: 'superadmin',
      userEmail: 'superadmin@gmail.com',
      password: 'Superadmin@123',
    },
  ],
  isValidUser: false,
});

export const productsReducer = createReducer(
  initialState,
  on(productsActions.getAllProductListSuccess, (state, { products }) => {
    return {
      ...state,
      productList: products,
    };
  }),
  on(productsActions.signInDetails, (state) => {
    return {
      ...state,
      signinDetails: state.signinDetails,
    };
  }),
  on(productsActions.isValidUser, (state, { userValid }) => {
    return {
      ...state,
      isValidUser: userValid,
    };
  })
);
