import { TestBed } from '@angular/core/testing';

import { ErrorModalsService } from './error-modals.service';

describe('ErrorModalsService', () => {
  let service: ErrorModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
