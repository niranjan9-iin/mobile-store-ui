import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './pages/admin/add-admin/add-admin.component';
import { AdminAddMobileComponent } from './pages/admin/admin-add-mobile/admin-add-mobile.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminViewAllOrdersComponent } from './pages/admin/admin-view-all-orders/admin-view-all-orders.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { BasicComponent } from './pages/layouts/basic/basic.component';
import { CustomerLayoutComponent } from './pages/layouts/customer-layout/customer-layout.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';


const routes: Routes = [{
  path: '',
  component: BasicComponent
}, {
  path: 'user',
  component: CustomerLayoutComponent,
  children: [
    {
      path: '',
      component: UserHomeComponent
    }
  ]
}, {
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: '',
      component: AdminHomeComponent
    },
    {
      path: 'add-admin',
      component: AddAdminComponent
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
