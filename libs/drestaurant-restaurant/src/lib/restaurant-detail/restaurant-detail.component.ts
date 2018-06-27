import { Component, OnInit } from '@angular/core';
import { RestaurantModel, DrestaurantRestaurantService } from '@d-restaurant-frontend/drestaurant-shared';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'd-restaurant-frontend-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant$: Observable<RestaurantModel>;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: DrestaurantRestaurantService
  ) {}

  ngOnInit() {
    this.restaurant$ = this.route.params
      .map(params => params['id'])
      .switchMap(id => this.restaurantService.getRestaurant(id));
  }
}
