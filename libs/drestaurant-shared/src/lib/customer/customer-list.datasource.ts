import { DataSource } from '@angular/cdk/table';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { PageEvent } from '@angular/material';
import { CustomerModel } from './customer.model';
import { PageModel } from './../page.model';
import { DrestaurantCustomerService } from './drestaurant-customer.service';
import { EventManager } from './../event-manager.service';
import { MyEvent } from './../event.model';
import { StompService } from '@stomp/ng2-stompjs';

export class CustomerListDataSource extends DataSource<CustomerModel> {
  page: PageModel;

  constructor(
    private customerService: DrestaurantCustomerService,
    private pageChange: Subject<PageEvent>,
    private eventManager: EventManager,
    private stompService: StompService
  ) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CustomerModel[]> {
    const displayDataChanges = [
      this.stompService.subscribe('/topic/customers.updates'),
      this.pageChange,
      this.eventManager.observable.filter(
        event => event.name === MyEvent.CUSTOMER_LIST_MODIFICATION
      )
    ];

    const startPageEvent = new PageEvent();
    startPageEvent.pageIndex = 0;
    startPageEvent.pageSize = 5;

    /** Merging 'customerListModification' and 'page changed' streams **/
    return Observable.merge(...displayDataChanges)
      .startWith(startPageEvent)
      .switchMap(event => {
        /** Check the type of an event in the stream.
         In case of 'customerListModification' event set the page index and the page size to initial values **/
        if (event.pageIndex || event.pageSize) {
          return this.customerService.getCustomersByParams(
            event.pageIndex + '',
            event.pageSize + ''
          );
        } else {
          return this.customerService.getCustomersByParams(
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
