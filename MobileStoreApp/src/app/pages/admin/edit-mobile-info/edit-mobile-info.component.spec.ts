import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMobileInfoComponent } from './edit-mobile-info.component';

describe('EditMobileInfoComponent', () => {
  let component: EditMobileInfoComponent;
  let fixture: ComponentFixture<EditMobileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMobileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMobileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
