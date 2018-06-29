import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';


@Injectable({
  providedIn: 'root'
})
export class EventManager {
  observable: Observable<any>;
  observer: Observer<any>;

  constructor() {
    this.observable = Observable.create((observer: Observer<any>) => {
      this.observer = observer;
    }).share();
  }

  broadcast(event) {
    this.observer.next(event);
  }

  subscribe(eventName, callback) {
    const subscriber: Subscription = this.observable
      .filter(event => {
        return event.name === eventName;
      })
      .subscribe(callback);
    return subscriber;
  }

  destroy(subscriber: Subscription) {
    subscriber.unsubscribe();
  }
}
