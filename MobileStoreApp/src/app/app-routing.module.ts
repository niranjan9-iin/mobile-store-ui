import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMyProfileComponent } from './common/edit-profile/edit-my-profile/edit-my-profile.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AdminAddMobileComponent } from './pages/admin/admin-add-mobile/admin-add-mobile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { EditCustomerInfoComponent } from './pages/admin/edit-customer-info/edit-customer-info.component';
import { EditMobileInfoComponent } from './pages/admin/edit-mobile-info/edit-mobile-info.component';
import { ShowAllCustomersComponent } from './pages/admin/show-all-customers/show-all-customers.component';
import { ViewAllOrdersComponent } from './pages/admin/view-all-orders/view-all-orders.component';
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
  canActivate: [AuthGuard],
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
    },{
      path:'edit-my-profile',
      component: EditMyProfileComponent
    }
  ]
}, {
  path: 'admin',
  canActivate: [AdminAuthGuard],
  component: AdminComponent,
  children: [
    {
      path: '',
      component: AdminHomeComponent
    },
    {
      path: 'add-mobile',
      component: AdminAddMobileComponent
    },
    {
      path: 'add-category',
      component: AddCategoryComponent
    },{
      path: 'edit-mobile/:id',
      component: EditMobileInfoComponent
    },{
      path:'view-all-orders',
      component: ViewAllOrdersComponent
    },{
      path:'show-all-customers',
      component: ShowAllCustomersComponent
    },
    {
      path:'edit-customer-info/:id',
      component: EditCustomerInfoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
