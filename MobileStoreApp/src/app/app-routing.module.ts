import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAddMobileComponent } from './pages/admin/admin-add-mobile/admin-add-mobile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminViewAllOrdersComponent } from './pages/admin/admin-view-all-orders/admin-view-all-orders.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserCartComponent } from './pages/user/user-cart/user-cart.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserOrdersComponent } from './pages/user/user-orders/user-orders.component';


const routes: Routes = [{
  path: '',
  component: BasicComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegisterComponent
    }
  ]
}, {
  path: 'user',
  component: CustomerLayoutComponent,
  children: [
    {
      path: '',
      component: UserHomeComponent
    }, {
      path: 'cart',
      component: UserCartComponent
    }, {
      path: 'orders-view',
      component: UserOrdersComponent
    }
  ]
}, {
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: '',
      component: AdminHomeComponent
    }
    ,
    {
      path: 'view-orders',
      component: AdminViewAllOrdersComponent
    },
    {
      path: 'add-mobile',
      component: AdminAddMobileComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
