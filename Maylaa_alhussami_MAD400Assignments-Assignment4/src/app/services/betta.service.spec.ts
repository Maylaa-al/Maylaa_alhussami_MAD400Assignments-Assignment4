import { TestBed } from '@angular/core/testing';

import { BettaService } from './betta.service';

describe('BettaService', () => {
  let service: BettaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BettaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
