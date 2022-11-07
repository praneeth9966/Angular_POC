import { Component, OnInit, OnChanges } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { ProductService } from './product.service';
import { Store } from '@ngrx/store';
import { selectProductsList } from 'src/store/products.selector';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct;
  productID: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private store: Store
  ) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.productID = +param;
    }
    this.getAllProductsListListener();
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  getAllProductsListListener() {
    this.store
      .select(selectProductsList)
      .pipe(filter((data) => !!data.length))
      .subscribe((data) => {
        this.product = data.filter(
          (product) => product.productId === this.productID
        )[0];
      });
  }
}
