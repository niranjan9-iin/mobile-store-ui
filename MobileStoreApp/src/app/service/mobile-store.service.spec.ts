import { TestBed } from '@angular/core/testing';

import { MobileStoreService } from './mobile-store.service';

describe('MobileStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileStoreService = TestBed.get(MobileStoreService);
    expect(service).toBeTruthy();
  });
});
