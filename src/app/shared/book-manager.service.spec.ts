import { TestBed } from '@angular/core/testing';

import { BookManagerService } from './book-manager.service';

describe('BookManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookManagerService = TestBed.get(BookManagerService);
    expect(service).toBeTruthy();
  });
});
