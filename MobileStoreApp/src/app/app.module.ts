import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { AdminAddMobileComponent } from './pages/admin/admin-add-mobile/admin-add-mobile.component';
import { AdminViewAllOrdersComponent } from './pages/admin/admin-view-all-orders/admin-view-all-orders.component';
import { AddAdminComponent } from './pages/admin/add-admin/add-admin.component';
import { ViewMobilesComponent } from './common/view-mobiles/view-mobiles.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BasicComponent,
    CustomerLayoutComponent,
    AdminAddMobileComponent,
    AdminViewAllOrdersComponent,
    AddAdminComponent,
    ViewMobilesComponent,
    AdminHomeComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
