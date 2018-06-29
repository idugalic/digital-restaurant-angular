import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material';
import { CourierListDataSource, DrestaurantCourierService } from '@d-restaurant-frontend/drestaurant-shared';
import { EventManager } from '@d-restaurant-frontend/drestaurant-shared';

@Component({
  selector: 'd-restaurant-frontend-courier-list',
  templateUrl: './courier-list.component.html',
  styleUrls: ['./courier-list.component.scss']
})
export class CourierListComponent implements OnInit {
  dataSource: CourierListDataSource;
  pageChange: Subject<PageEvent>;

  constructor(private courierService: DrestaurantCourierService,  private eventManager: EventManager) { }

  ngOnInit() {
    this.pageChange = new Subject();
    this.dataSource = new CourierListDataSource(
      this.courierService,
      this.pageChange,
      this.eventManager
    );
  }

  pageChanged(pageEvent: PageEvent) {
    /** Sending 'page event' to the stream */
    this.pageChange.next(pageEvent);
  }
}
