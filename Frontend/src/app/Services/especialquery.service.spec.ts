import { TestBed } from '@angular/core/testing';

import { EspecialqueryService } from './especialquery.service';

describe('EspecialqueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspecialqueryService = TestBed.get(EspecialqueryService);
    expect(service).toBeTruthy();
  });
});
