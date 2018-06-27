import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatCommonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { DrestaurantSharedModule } from '@d-restaurant-frontend/drestaurant-shared';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { MainComponent } from './main/main.component';
import { MainDetailComponent } from './main-detail/main-detail.component';
import { MainListComponent } from './main-list/main-list.component';
import { MainNewComponent } from './main-new/main-new.component';
import { MainDetailCustomerComponent } from './main-detail-customer/main-detail-customer.component';
import { MainDetailCourierComponent } from './main-detail-courier/main-detail-courier.component';
import { MainDetailRestaurantComponent } from './main-detail-restaurant/main-detail-restaurant.component';
import { MainDetailOrderComponent } from './main-detail-order/main-detail-order.component';
import { MainListCourierComponent } from './main-list-courier/main-list-courier.component';
import { MainListCustomerComponent } from './main-list-customer/main-list-customer.component';
import { MainListRestaurantComponent } from '@d-restaurant-frontend/drestaurant-ui/src/lib/main-list-restaurant/main-list-restaurant.component';
import { MainListOrderComponent } from '@d-restaurant-frontend/drestaurant-ui/src/lib/main-list-order/main-list-order.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    DrestaurantSharedModule,
    MatCardModule,
    MatButtonModule,
    MatCommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    MainComponent,
    MainDetailComponent,
    MainListComponent,
    MainNewComponent,
    MainDetailCustomerComponent,
    MainDetailCourierComponent,
    MainDetailRestaurantComponent,
    MainDetailOrderComponent,
    MainListCourierComponent,
    MainListCustomerComponent,
    MainListRestaurantComponent,
    MainListOrderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    MainComponent,
    //MainDetailComponent,
    MainListComponent,
    MainNewComponent,
    MainDetailCustomerComponent,
    MainDetailCourierComponent,
    MainDetailRestaurantComponent,
    MainDetailOrderComponent,
    MainListCourierComponent,
    MainListCustomerComponent,
    MainListRestaurantComponent,
    MainListOrderComponent
  ]
})
export class DrestaurantUiModule {}
