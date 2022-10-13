import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';


describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let service: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
    service = null;
  })

  
  // it('should create', () => {
  //   component.ngOnInit();
  //   expect(component).toBeTruthy();
  // });

  // it('should contain page title as product detail', ()=>{
  //   console.log(component.pageTitle); 
  //   expect(component.pageTitle).toEqual('Product Detail');
  // })


});
