import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DrestaurantOrderComponent } from './drestaurant-order/drestaurant-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { DrestaurantSharedModule } from '@d-restaurant-frontend/drestaurant-shared';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';

export const drestaurantOrderRoutes: Route[] = [
  {
    path: '',
    component: DrestaurantOrderComponent,
    children: [
      {
        path: '',
        component: OrderListComponent,
        children: [
          {
            path: ':id',
            component: OrderDetailComponent
          },
          {
            path: 'action/new',
            component: OrderCreateComponent
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
    DrestaurantOrderComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderCreateComponent
  ]
})
export class DrestaurantOrderModule {}
