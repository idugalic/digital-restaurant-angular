import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material';
import { CourierListDataSource } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-main-list-courier',
  templateUrl: './main-list-courier.component.html',
  styleUrls: ['./main-list-courier.component.scss']
})
export class MainListCourierComponent implements OnInit {
  @Input() dataSource: CourierListDataSource;
  @Input() displayedColumns;
  @Output()
  paginatorPageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  constructor() {}

  ngOnInit() {}

  pageChanged(event: PageEvent) {
    this.paginatorPageEvent.emit(event);
  }
}
