import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CustomersModel } from './customers.model';
import { CustomerModel } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class DrestaurantCustomerService {
  constructor(
    private http: HttpClient,
    @Inject('baseURL') private baseUrl: string
  ) { }

  private extractListData(res) {
    const model: CustomersModel = new CustomersModel();
    model.page = res.page;
    model.list = res._embedded.customers || {};
    return model;
  }

  private extractSingleData(res) {
    return res || {};
  }

  public getCustomers(): Observable<CustomersModel> {
    const url: string = this.baseUrl + '/query/customers';
    return this.http.get(url).map(this.extractListData);
  }

  public getCustomersByParams(
    page: string,
    size: string
  ): Observable<CustomersModel> {
    const url: string =
      this.baseUrl + '/query/customers' + '?page=' + page + '&size=' + size;
    return this.http.get(url).map(this.extractListData);
  }

  public getCustomer(id: string): Observable<CustomerModel> {
    const url: string = this.baseUrl + '/query/customers/' + id;
    return this.http.get(url).map(this.extractSingleData);
  }

  public createCustomer(customer: CustomerModel): Observable<any> {
    const url: string = this.baseUrl + '/command/customer/createcommand';
    const name: CustomerName = new CustomerName(customer.firstName, customer.lastName);
    const customerRequest: CreateCustomerRequest = new CreateCustomerRequest(name, customer.orderLimit);
    return this.http.post(url, customerRequest);
  }
}

export class CreateCustomerRequest {
  constructor(public name: CustomerName, public orderLimit: number) { }
}
export class CustomerName {
  constructor(public firstName: string, public lastName: string) { }
}

