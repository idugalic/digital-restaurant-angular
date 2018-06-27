import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatCommonModule,
  MatDatepickerModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatTabsModule,
  MatPaginatorModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule,
  MatNativeDateModule
} from '@angular/material';
import { DrestaurantUiModule } from '@d-restaurant-frontend/drestaurant-ui';
describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          BrowserAnimationsModule,
          DrestaurantUiModule,
          MatCardModule,
          MatButtonModule,
          MatCommonModule,
          MatDatepickerModule,
          MatInputModule,
          MatCheckboxModule,
          MatRadioModule,
          MatSidenavModule,
          MatListModule,
          MatIconModule,
          MatToolbarModule,
          MatTabsModule,
          MatPaginatorModule,
          MatTableModule,
          MatOptionModule,
          MatSelectModule,
          MatNativeDateModule
        ],
        declarations: [AppComponent]
      }).compileComponents();
    })
  );
  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'd-restaurant-frontend'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('d-restaurant-frontend');
    })
  );
});
