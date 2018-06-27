import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { RestaurantsModel } from './restaurants.model';
import { RestaurantModel } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class DrestaurantRestaurantService {
  constructor(
    private http: HttpClient,
    @Inject('baseURL') private baseUrl: string
  ) {}

  private extractListData(res) {
    const model: RestaurantsModel = new RestaurantsModel();
    model.page = res.page;
    model.list = res._embedded.restaurants || {};
    return model;
  }

  private extractSingleData(res) {
    return res || {};
  }
  public getRestaurants(): Observable<RestaurantsModel> {
    const url: string = this.baseUrl + '/query/restaurants';
    return this.http.get(url).map(this.extractListData);
  }

  public getRestaurantsByParams(
    page: string,
    size: string
  ): Observable<RestaurantsModel> {
    const url: string =
      this.baseUrl + '/query/restaurants' + '?page=' + page + '&size=' + size;
    return this.http.get(url).map(this.extractListData);
  }

  public getRestaurant(id: string): Observable<RestaurantModel> {
    const url: string = this.baseUrl + '/query/restaurants/' + id;
    return this.http.get(url).map(this.extractSingleData);
  }
}
