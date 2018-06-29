import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DrestaurantCourierComponent } from './drestaurant-courier/drestaurant-courier.component';
import { CourierCreateComponent } from './courier-create/courier-create.component';
import { CourierDetailComponent } from './courier-detail/courier-detail.component';
import { CourierListComponent } from './courier-list/courier-list.component';
import { CourierOrderListComponent } from './courier-order-list/courier-order-list.component';
import { CourierOrderDetailComponent } from './courier-order-detail/courier-order-detail.component';
import { CourierOrderAssignToCourierComponent } from './courier-order-assign-to-courier/courier-order-assign-to-courier.component';
import { CourierOrderMarkAsDeliveredComponent } from './courier-order-mark-as-delivered/courier-order-mark-as-delivered.component';
import { DrestaurantSharedModule } from '@d-restaurant-frontend/drestaurant-shared';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import { ReactiveFormsModule } from '@angular/forms';

export const drestaurantCourierRoutes: Route[] = [
  {
    path: '',
    component: DrestaurantCourierComponent,
    children: [
      {
        path: '',
        component: CourierListComponent,
        children: [
          {
            path: ':id',
            component: CourierDetailComponent
          },
          {
            path: 'action/new',
            component: CourierCreateComponent
          }
        ]
      },
      {
        path: 'orders',
        component: CourierOrderListComponent,
        children: [
          {
            path: ':id',
            component: CourierOrderDetailComponent,
            children: [
              {
                path: 'action/assign',
                component: CourierOrderAssignToCourierComponent
              },
              {
                path: 'action/markdelivered',
                component: CourierOrderMarkAsDeliveredComponent
              }
            ]
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
    DrestaurantSharedModule,
    DrestaurantUiModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    DrestaurantCourierComponent,
    CourierCreateComponent,
    CourierDetailComponent,
    CourierListComponent,
    CourierOrderListComponent,
    CourierOrderDetailComponent,
    CourierOrderAssignToCourierComponent,
    CourierOrderMarkAsDeliveredComponent
  ]
})
export class DrestaurantCourierModule {}
