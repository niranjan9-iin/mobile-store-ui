import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAllOrdersComponent } from './admin-view-all-orders.component';

describe('AdminViewAllOrdersComponent', () => {
  let component: AdminViewAllOrdersComponent;
  let fixture: ComponentFixture<AdminViewAllOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewAllOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAllOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
