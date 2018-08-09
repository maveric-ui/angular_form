import { TestBed, inject } from '@angular/core/testing';

import { AuthMainService } from './auth-main.service';

describe('AuthMainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthMainService]
    });
  });

  it('should be created', inject([AuthMainService], (service: AuthMainService) => {
    expect(service).toBeTruthy();
  }));
});
