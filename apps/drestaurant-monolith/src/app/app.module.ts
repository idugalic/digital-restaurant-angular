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
import {StompConfig, StompService} from '@stomp/ng2-stompjs';

const stompConfig: StompConfig = {
  // Which server?
  url: environment.webSocketURL,

  // Headers
  // Typical keys: login, passcode, host
  headers: {
    login: 'guest',
    passcode: 'guest'
  },

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 5000,

  // Will log diagnostics on console
  debug: true
};

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
    },
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
