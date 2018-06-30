import { Component, OnInit } from '@angular/core';
import { RestaurantsModel, DrestaurantRestaurantService } from '@d-restaurant-frontend/drestaurant-shared';
import { Observable } from 'rxjs';
import { StompService } from '@stomp/ng2-stompjs';
import {Message} from '@stomp/stompjs';

@Component({
  selector: 'd-restaurant-frontend-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants$: Observable<RestaurantsModel>;

  constructor(private restaurantService: DrestaurantRestaurantService, private stompService: StompService) { }

  ngOnInit() {
    const dataChanges = [
      this.stompService.subscribe('/topic/restaurants.updates'),
    ];
    this.restaurants$ = Observable
      .merge(...dataChanges)
      .startWith(null)
      .switchMap(event => this.restaurantService.getRestaurants());
  }
}
