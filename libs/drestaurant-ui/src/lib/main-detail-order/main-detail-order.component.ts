import { Component, OnInit, Input } from '@angular/core';
import { OrderModel } from '@d-restaurant-frontend/drestaurant-shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd-restaurant-frontend-main-detail-order',
  templateUrl: './main-detail-order.component.html',
  styleUrls: ['./main-detail-order.component.scss']
})
export class MainDetailOrderComponent implements OnInit {
  @Input() orderObservable: Observable<OrderModel>;
  constructor() { }
  ngOnInit() { }
}
