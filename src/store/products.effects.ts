import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { ProductService } from 'src/app/products/product.service';
import * as ProductActions from './products.actions';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  orderDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getAllProductList),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((response) => {
            return ProductActions.getAllProductListSuccess({
              products: response,
            });
          })
        )
      )
    )
  );
}
