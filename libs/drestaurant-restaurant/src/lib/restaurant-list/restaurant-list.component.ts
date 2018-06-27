import { Component, OnInit } from '@angular/core';
import { RestaurantsModel, DrestaurantRestaurantService } from '@d-restaurant-frontend/drestaurant-shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd-restaurant-frontend-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants$: Observable<RestaurantsModel>;

  constructor(private restaurantService: DrestaurantRestaurantService) {}

  ngOnInit() {
    this.restaurants$ = this.restaurantService.getRestaurants();
  }
}
