import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersModel } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-main-list-order',
  templateUrl: './main-list-order.component.html',
  styleUrls: ['./main-list-order.component.scss']
})
export class MainListOrderComponent implements OnInit {
  @Input() orders: Observable<OrdersModel>;
  constructor() { }

  ngOnInit() { }

}
