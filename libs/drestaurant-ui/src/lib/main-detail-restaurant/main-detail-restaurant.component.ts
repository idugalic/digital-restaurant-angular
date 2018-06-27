import { Component, OnInit, Input } from '@angular/core';
import { RestaurantModel } from '@d-restaurant-frontend/drestaurant-shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd-restaurant-frontend-main-detail-restaurant',
  templateUrl: './main-detail-restaurant.component.html',
  styleUrls: ['./main-detail-restaurant.component.scss']
})
export class MainDetailRestaurantComponent implements OnInit {
  @Input() restaurantObservable: Observable<RestaurantModel>;
  constructor() { }
  ngOnInit() { }
}
