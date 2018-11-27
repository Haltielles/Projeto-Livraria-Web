import { TestBed } from '@angular/core/testing';

import { EmailsenderService } from './emailsender.service';

describe('EmailsenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailsenderService = TestBed.get(EmailsenderService);
    expect(service).toBeTruthy();
  });
});
