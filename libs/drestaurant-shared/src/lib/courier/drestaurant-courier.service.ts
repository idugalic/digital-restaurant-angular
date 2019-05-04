import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {CouriersModel} from './couriers.model';
import {CourierModel} from './courier.model';

@Injectable({
  providedIn: 'root'
})
export class DrestaurantCourierService {
  constructor(
    private http: HttpClient,
    @Inject('baseURL') private baseUrl: string
  ) {
  }

  private static extractListData(res) {
    const model: CouriersModel = new CouriersModel();
    model.page = res.page;
    model.list = res._embedded.couriers || {};
    return model;
  }

  private static extractSingleData(res) {
    return res || {};
  }

  public getCouriers(): Observable<CouriersModel> {
    const url: string = this.baseUrl + '/query/couriers';
    return this.http.get(url).map(DrestaurantCourierService.extractListData);
  }

  public getCouriersByParams(
    page: string,
    size: string
  ): Observable<CouriersModel> {
    const url: string =
      this.baseUrl + '/query/couriers' + '?page=' + page + '&size=' + size;
    return this.http
      .get(url)
      .map(DrestaurantCourierService.extractListData);
  }

  public getCourier(id: string): Observable<CourierModel> {
    const url: string = this.baseUrl + '/query/couriers/' + id;
    return this.http.get(url).map(DrestaurantCourierService.extractSingleData);
  }

  public createCourier(courier: CourierModel): Observable<any> {
    const url: string = this.baseUrl + '/command/courier/createcommand';
    const courierRequest: CreateCourierRequest = new CreateCourierRequest(courier.firstName, courier.firstName, courier.maxNumberOfActiveOrders);
    return this.http.post(url, courierRequest);
  }
}

export class CreateCourierRequest {
  constructor(public firstName: string, public lastName: string, public maxNumberOfActiveOrders: number) {
  }
}

