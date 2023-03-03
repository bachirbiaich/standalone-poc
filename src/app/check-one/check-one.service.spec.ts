import { TestBed } from '@angular/core/testing';

import { CheckOneService } from './check-one.service';

describe('CheckOneService', () => {
  let service: CheckOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
