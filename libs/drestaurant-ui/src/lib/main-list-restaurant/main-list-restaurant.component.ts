import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantsModel } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-main-list-restaurant',
  templateUrl: './main-list-restaurant.component.html',
  styleUrls: ['./main-list-restaurant.component.scss']
})
export class MainListRestaurantComponent implements OnInit {
  @Input() restaurants: Observable<RestaurantsModel>;
  constructor() { }

  ngOnInit() { }

}
