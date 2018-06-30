import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersModel, DrestaurantOrderService } from '@d-restaurant-frontend/drestaurant-shared';
import { StompService } from '@stomp/ng2-stompjs';

@Component({
  selector: 'd-restaurant-frontend-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders$: Observable<OrdersModel>;

  constructor(private orderService: DrestaurantOrderService, private stompService: StompService) {}

  ngOnInit() {
    const dataChanges = [
      this.stompService.subscribe('/topic/orders.updates'),
    ];

    this.orders$ = Observable
      .merge(...dataChanges)
      .startWith(null)
      .switchMap(event => this.orderService.getOrders());
  }
}
