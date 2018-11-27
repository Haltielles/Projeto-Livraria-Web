import { TestBed } from '@angular/core/testing';

import { BookauthorbookService } from './bookauthorbook.service';

describe('BookauthorbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookauthorbookService = TestBed.get(BookauthorbookService);
    expect(service).toBeTruthy();
  });
});
