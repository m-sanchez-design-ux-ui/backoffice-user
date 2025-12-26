import { TestBed } from '@angular/core/testing';

import { DatatablesTwoService } from './datatables-two.service';

describe('DatatablesTwoService', () => {
  let service: DatatablesTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatablesTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
