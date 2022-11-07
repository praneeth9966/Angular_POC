import { IProduct } from 'src/app/products/product';

export interface SignUp {
  userName: string;
  userEmail?: string;
  password: string;
}
export interface AppState {
  productList: Array<IProduct>;
  signinDetails: Array<SignUp>;
  isValidUser: boolean;
}
