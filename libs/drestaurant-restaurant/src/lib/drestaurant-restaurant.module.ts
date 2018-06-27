import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DrestaurantRestaurantComponent } from './drestaurant-restaurant/drestaurant-restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { RestaurantOrderMarkPreparedComponent } from './restaurant-order-mark-prepared/restaurant-order-mark-prepared.component';
import { RestaurantOrderDetailComponent } from './restaurant-order-detail/restaurant-order-detail.component';
import { RestaurantOrderListComponent } from './restaurant-order-list/restaurant-order-list.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import { HttpClientModule } from '@angular/common/http';
import { DrestaurantSharedModule } from '@d-restaurant-frontend/drestaurant-shared';

export const drestaurantRestaurantRoutes: Route[] = [
  {
    path: '',
    component: DrestaurantRestaurantComponent,
    children: [
      {
        path: '',
        component: RestaurantListComponent,
        children: [
          {
            path: ':id',
            component: RestaurantDetailComponent
          },
          {
            path: 'action/new',
            component: RestaurantCreateComponent
          }
        ]
      },
      {
        path: 'orders',
        component: RestaurantOrderListComponent,
        children: [
          {
            path: ':id',
            component: RestaurantOrderDetailComponent,
            children: [
              {
                path: 'action/markprepared',
                component: RestaurantOrderMarkPreparedComponent
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
    DrestaurantUiModule,
    DrestaurantSharedModule,
    HttpClientModule
  ],
  declarations: [
    DrestaurantRestaurantComponent,
    RestaurantDetailComponent,
    RestaurantCreateComponent,
    RestaurantOrderMarkPreparedComponent,
    RestaurantListComponent,
    RestaurantOrderListComponent,
    RestaurantOrderDetailComponent
  ]
})
export class DrestaurantRestaurantModule {}
