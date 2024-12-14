import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ServicesComponent } from './components/services/services.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryRepairComponent } from './components/category-repair/category-repair.component';
import { ProductRepairComponent } from './components/product-repair/product-repair.component';
import { CategoryDeteleComponent } from './components/category-detele/category-detele.component';
import { ProductDeteleComponent } from './components/product-detele/product-detele.component';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { DangkiComponent } from './components/dangki/dangki.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth-guard';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { AdminGuard } from './auth/admin-guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    BlogComponent,
    CartComponent,
    ContactComponent,
    CheckoutComponent,
    ServicesComponent,
    ThankyouComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductAddComponent,
    CategoryAddComponent,
    CategoryRepairComponent,
    ProductRepairComponent,
    CategoryDeteleComponent,
    ProductDeteleComponent,
    ProductDetailComponent,
    LoginComponent,
    DangkiComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [CategoryService, ProductService, AuthService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]

})
export class AppModule { }

