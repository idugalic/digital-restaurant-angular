import { Component, OnInit, Input } from '@angular/core';
import { CustomerModel } from '@d-restaurant-frontend/drestaurant-shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'd-restaurant-frontend-main-detail-customer',
  templateUrl: './main-detail-customer.component.html',
  styleUrls: ['./main-detail-customer.component.scss']
})
export class MainDetailCustomerComponent implements OnInit {
  @Input() customerObservable: Observable<CustomerModel>;
  constructor() { }
  ngOnInit() { }
}
