import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { OrdersModel } from './orders.model';
import { OrderModel } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class DrestaurantOrderService {
  constructor(
    private http: HttpClient,
    @Inject('baseURL') private baseUrl: string
  ) {}

  private extractListData(res) {
    const model: OrdersModel = new OrdersModel();
    model.page = res.page;
    model.list = res._embedded.orders || {};
    return model;
  }

  private extractSingleData(res) {
    return res || {};
  }

  public getOrders(): Observable<OrdersModel> {
    const url: string = this.baseUrl + '/query/orders';
    return this.http.get(url).map(this.extractListData);
  }

  public getOrdersByParams(
    page: string,
    size: string
  ): Observable<OrdersModel> {
    const url: string =
      this.baseUrl + '/query/orders' + '?page=' + page + '&size=' + size;
    return this.http.get(url).map(this.extractListData);
  }

  public getOrder(id: string): Observable<OrderModel> {
    const url: string = this.baseUrl + '/query/orders/' + id;
    return this.http.get(url).map(this.extractSingleData);
  }
}
