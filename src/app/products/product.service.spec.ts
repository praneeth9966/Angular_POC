import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';

describe('PostService', () => {
  let productService: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ProductService
      ],
    });

    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, ProductService],
    (httpClient: HttpTestingController, productService: ProductService) => {

      const productItem = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.jpg"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden-carts-73599-64_1000.jpg"
          }
      ];


      productService.getProducts()
        .subscribe((posts: any) => {
            console.log(posts);
            
          expect(posts.length).toBe(2);
        });

      let req = httpMock.expectOne('api/products/products.json');
      expect(req.request.method).toBe("GET");

      req.flush(productItem);
      httpMock.verify();

    })));
});