import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('d-restaurant-frontend-root div mat-sidenav-container mat-sidenav-content d-restaurant-frontend-header header mat-toolbar span a')).getText();
  }
}
