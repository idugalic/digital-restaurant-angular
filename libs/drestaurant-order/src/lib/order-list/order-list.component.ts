import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersModel, DrestaurantOrderService } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders$: Observable<OrdersModel>;

  constructor(private orderService: DrestaurantOrderService) {}

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }
}
