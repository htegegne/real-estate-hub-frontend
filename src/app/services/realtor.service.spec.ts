import { TestBed } from '@angular/core/testing';

import { RealtorService } from './realtor.service';

describe('RealtorService', () => {
  let service: RealtorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
