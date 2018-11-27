import { TestBed } from '@angular/core/testing';

import { BookcategoriebookService } from './bookcategoriebook.service';

describe('BookcategoriebookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookcategoriebookService = TestBed.get(BookcategoriebookService);
    expect(service).toBeTruthy();
  });
});
