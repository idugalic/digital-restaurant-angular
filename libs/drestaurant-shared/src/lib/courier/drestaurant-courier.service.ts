import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CouriersModel } from './couriers.model';
import { CourierModel } from './courier.model';

@Injectable({
  providedIn: 'root'
})
export class DrestaurantCourierService {
  constructor(
    private http: HttpClient,
    @Inject('baseURL') private baseUrl: string
  ) { }

  private extractListData(res) {
    const model: CouriersModel = new CouriersModel();
    model.page = res.page;
    model.list = res._embedded.couriers || {};
    return model;
  }

  private extractSingleData(res) {
    return res || {};
  }

  public getCouriers(): Observable<CouriersModel> {
    const url: string = this.baseUrl + '/query/couriers';
    return this.http.get(url).map(this.extractListData);
  }

  public getCouriersByParams(
    page: string,
    size: string
  ): Observable<CouriersModel> {
    const url: string =
      this.baseUrl + '/query/couriers' + '?page=' + page + '&size=' + size;
    return this.http
      .get(url)
      .map(this.extractListData);
  }

  public getCourier(id: string): Observable<CourierModel> {
    const url: string = this.baseUrl + '/query/couriers/' + id;
    return this.http.get(url).map(this.extractSingleData);
  }

  public createCourier(courier: CourierModel): Observable<any> {
    const url: string = this.baseUrl + '/command/courier/createcommand';
    const name: CourierName = new CourierName(courier.firstName, courier.lastName);
    const courierRequest: CreateCourierRequest = new CreateCourierRequest(name, courier.maxNumberOfActiveOrders);
    return this.http.post(url, courierRequest);
  }
}
export class CreateCourierRequest {
  constructor(public name: CourierName, public maxNumberOfActiveOrders: number) { }
}
export class CourierName {
  constructor(public firstName: string, public lastName: string) { }
}
