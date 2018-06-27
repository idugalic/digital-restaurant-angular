import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DrestaurantCustomerComponent } from './drestaurant-customer/drestaurant-customer.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerOrderListComponent } from './customer-order-list/customer-order-list.component';
import { CustomerOrderDetailComponent } from './customer-order-detail/customer-order-detail.component';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantSharedModule } from '@d-restaurant-frontend/drestaurant-shared';

export const drestaurantCustomerRoutes: Route[] = [
  {
    path: '',
    component: DrestaurantCustomerComponent,
    children: [
      {
        path: '',
        component: CustomerListComponent,
        children: [
          {
            path: ':id',
            component: CustomerDetailComponent
          },
          {
            path: 'action/new',
            component: CustomerCreateComponent
          }
        ]
      },
      {
        path: 'orders',
        component: CustomerOrderListComponent,
        children: [
          {
            path: ':id',
            component: CustomerOrderDetailComponent
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DrestaurantUiModule,
    DrestaurantSharedModule,
    HttpClientModule
  ],
  declarations: [
    DrestaurantCustomerComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerOrderListComponent,
    CustomerOrderDetailComponent
  ]
})
export class DrestaurantCustomerModule {}
