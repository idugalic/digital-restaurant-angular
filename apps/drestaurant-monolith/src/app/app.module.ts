import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import {
  drestaurantCustomerRoutes,
  DrestaurantCustomerModule
} from '@d-restaurant-frontend/drestaurant-customer';
import {
  drestaurantCourierRoutes,
  DrestaurantCourierModule
} from '@d-restaurant-frontend/drestaurant-courier';
import {
  drestaurantOrderRoutes,
  DrestaurantOrderModule
} from '@d-restaurant-frontend/drestaurant-order';
import {
  drestaurantRestaurantRoutes,
  DrestaurantRestaurantModule
} from '@d-restaurant-frontend/drestaurant-restaurant';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
import { environment } from '../environments/environment';
import { EventManager } from '@d-restaurant-frontend/drestaurant-shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    DrestaurantRestaurantModule,
    DrestaurantOrderModule,
    DrestaurantCustomerModule,
    DrestaurantCourierModule,
    DrestaurantUiModule,
    RouterModule.forRoot(
      [
        { path: 'customer', children: drestaurantCustomerRoutes },
        { path: 'courier', children: drestaurantCourierRoutes },
        { path: 'order', children: drestaurantOrderRoutes },
        { path: 'restaurant', children: drestaurantRestaurantRoutes }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [
    EventManager,
    {
      provide: 'baseURL',
      useValue: environment.baseURL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
