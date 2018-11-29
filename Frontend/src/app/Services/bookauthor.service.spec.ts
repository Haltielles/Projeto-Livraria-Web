import { TestBed } from '@angular/core/testing';

import { BookauthorService } from './bookauthor.service';

describe('BookauthorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookauthorService = TestBed.get(BookauthorService);
    expect(service).toBeTruthy();
  });
});
