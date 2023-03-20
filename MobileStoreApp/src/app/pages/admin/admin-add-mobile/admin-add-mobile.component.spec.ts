import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddMobileComponent } from './admin-add-mobile.component';

describe('AdminAddMobileComponent', () => {
  let component: AdminAddMobileComponent;
  let fixture: ComponentFixture<AdminAddMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
