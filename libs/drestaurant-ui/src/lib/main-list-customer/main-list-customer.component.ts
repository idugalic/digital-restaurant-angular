import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';
import { CustomerListDataSource } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-main-list-customer',
  templateUrl: './main-list-customer.component.html',
  styleUrls: ['./main-list-customer.component.scss']
})
export class MainListCustomerComponent implements OnInit {
  @Input() dataSource: CustomerListDataSource;
  @Input() displayedColumns;
  @Output()
  paginatorPageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  constructor() {}

  ngOnInit() {}

  pageChanged(event: PageEvent) {
    this.paginatorPageEvent.emit(event);
  }
}
