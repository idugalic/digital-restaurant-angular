import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DrestaurantCustomerService, CustomerListDataSource, EventManager } from '@d-restaurant-frontend/drestaurant-shared';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'd-restaurant-frontend-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  dataSource: CustomerListDataSource;
  pageChange: Subject<PageEvent>;

  constructor(private customerService: DrestaurantCustomerService,  private eventManager: EventManager) { }

  ngOnInit() {
    this.pageChange = new Subject();
    this.dataSource = new CustomerListDataSource(
      this.customerService,
      this.pageChange,
      this.eventManager
    );
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }
}
