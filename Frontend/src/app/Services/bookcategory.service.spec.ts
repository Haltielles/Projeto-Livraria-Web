import { TestBed } from '@angular/core/testing';

import { BookcategoryService } from './bookcategory.service';

describe('BookcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookcategoryService = TestBed.get(BookcategoryService);
    expect(service).toBeTruthy();
  });
});
