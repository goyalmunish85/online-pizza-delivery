import { TestBed, inject } from '@angular/core/testing';

import { UserIdService } from './user-id.service';

describe('UserIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserIdService]
    });
  });

  it('should be created', inject([UserIdService], (service: UserIdService) => {
    expect(service).toBeTruthy();
  }));
});
