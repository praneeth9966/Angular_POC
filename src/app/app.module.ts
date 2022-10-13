import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
// import { from } from 'rxjs';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { UTLoginComponent } from './ut-login/ut-login.component';
import { LightboxModule } from 'ngx-lightbox';
// import { SimplebarAngularModule } from 'simplebar-angular';

import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

import { StoreModule } from '@ngrx/store';
import { productsReducer } from 'src/store/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from 'src/store/products.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    UTLoginComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzGridModule,
    LightboxModule,
    StoreModule.forRoot({ products: productsReducer }),
    EffectsModule.forRoot([Effects]),
    // SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
