import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMobilesComponent } from './view-mobiles.component';

describe('ViewMobilesComponent', () => {
  let component: ViewMobilesComponent;
  let fixture: ComponentFixture<ViewMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
