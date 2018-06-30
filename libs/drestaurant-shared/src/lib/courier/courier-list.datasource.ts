import { DataSource } from '@angular/cdk/table';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { PageEvent } from '@angular/material';
import { CourierModel } from './courier.model';
import { DrestaurantCourierService } from './drestaurant-courier.service';
import { PageModel } from './../page.model';
import { EventManager } from './../event-manager.service';
import { MyEvent } from './../event.model';
import { StompService } from '@stomp/ng2-stompjs';

export class CourierListDataSource extends DataSource<CourierModel> {
  page: PageModel;

  constructor(
    private courierService: DrestaurantCourierService,
    private pageChange: Subject<PageEvent>,
    private eventManager: EventManager,
    private stompService: StompService
  ) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CourierModel[]> {
    const displayDataChanges = [
      this.stompService.subscribe('/topic/couriers.updates'),
      this.pageChange,
      this.eventManager.observable.filter(
        event => event.name === MyEvent.COURIER_LIST_MODIFICATION
      )
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 5;

    /** Merging 'courierListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap(event => {
        /** Check the type of an event in the stream.
         In case of 'courierListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.courierService.getCouriersByParams(
            event.pageIndex + '',
            event.pageSize + ''
          );
        } else {
          return this.courierService.getCouriersByParams(
            startPageEvent.pageIndex + '',
            startPageEvent.pageSize + ''
          );
        }
      })
      .map(data => {
        this.page = data.page;

        return data.list;
      })
      .catch(error => {
        console.error(error);
        return Observable.of([]);
      });
  }
  disconnect() {}
}
