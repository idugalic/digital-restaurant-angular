import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel, DrestaurantOrderService } from '@d-restaurant-frontend/drestaurant-shared';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'd-restaurant-frontend-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order$: Observable<OrderModel>;

  constructor(
    private route: ActivatedRoute,
    private orderService: DrestaurantOrderService
  ) {}

  ngOnInit() {
    this.order$ = this.route.params
      .map(params => params['id'])
      .switchMap(id => this.orderService.getOrder(id));
  }
}
