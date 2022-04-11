import { TestBed } from '@angular/core/testing';

import { QuoteRequestService } from './quote-request.service';

describe('QuoteRequestService', () => {
  let service: QuoteRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
