import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { AdminAddMobileComponent } from './pages/admin/admin-add-mobile/admin-add-mobile.component';
import { ViewMobilesComponent } from './common/view-mobiles/view-mobiles.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { MobileStoreService } from './service/mobile-store.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserCartComponent } from './pages/user/user-cart/user-cart.component';
import { UserOrdersComponent } from './pages/user/user-orders/user-orders.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { EditMobileInfoComponent } from './pages/admin/edit-mobile-info/edit-mobile-info.component';
import { AddToCartComponent } from './pages/user/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BasicComponent,
    CustomerLayoutComponent,
    AdminAddMobileComponent,
    ViewMobilesComponent,
    AdminHomeComponent,
    UserHomeComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserCartComponent,
    UserOrdersComponent,
    AddCategoryComponent,
    EditMobileInfoComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MobileStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
