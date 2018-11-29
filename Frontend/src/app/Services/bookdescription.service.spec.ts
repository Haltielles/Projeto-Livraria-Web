import { TestBed } from '@angular/core/testing';

import { BookdescriptionService } from './bookdescription.service';

describe('BookdescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookdescriptionService = TestBed.get(BookdescriptionService);
    expect(service).toBeTruthy();
  });
});
