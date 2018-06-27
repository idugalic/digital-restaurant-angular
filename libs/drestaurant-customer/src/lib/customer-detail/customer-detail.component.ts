import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel, DrestaurantCustomerService } from '@d-restaurant-frontend/drestaurant-shared';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'd-restaurant-frontend-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer$: Observable<CustomerModel>;

  constructor(
    private route: ActivatedRoute,
    private customerService: DrestaurantCustomerService
  ) {}

  ngOnInit() {
    this.customer$ = this.route.params
      .map(params => params['id'])
      .switchMap(id => this.customerService.getCustomer(id));
  }
}
