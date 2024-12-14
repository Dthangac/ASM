import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ServicesComponent } from './components/services/services.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryRepairComponent } from './components/category-repair/category-repair.component';
import { ProductRepairComponent } from './components/product-repair/product-repair.component';
import { CategoryDeteleComponent } from './components/category-detele/category-detele.component';
import { ProductDeteleComponent } from './components/product-detele/product-detele.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { DangkiComponent } from './components/dangki/dangki.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { AuthGuard } from './auth/auth-guard';
import { AdminGuard } from './auth/admin-guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cart', component: CartComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: 'category', component: CategoryListComponent, canActivate: [AdminGuard]},
  { path: 'product', component: ProductListComponent, canActivate: [AdminGuard]},
  { path: 'product-add', component: ProductAddComponent, canActivate: [AdminGuard]},
  { path: 'category-add', component: CategoryAddComponent, canActivate: [AdminGuard]},
  { path: 'category-repair/:id', component: CategoryRepairComponent, canActivate: [AdminGuard]},
  { path: 'product-repair/:id', component: ProductRepairComponent, canActivate: [AdminGuard]},
  { path: 'category-delete', component: CategoryDeteleComponent, canActivate: [AdminGuard]},
  { path: 'product-delete', component: ProductDeteleComponent, canActivate: [AdminGuard]},
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [AuthGuard]},
  { path: 'login' , component: LoginComponent},
  { path: 'dangki' , component: DangkiComponent},
  { path: 'my-account' , component: MyAccountComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
