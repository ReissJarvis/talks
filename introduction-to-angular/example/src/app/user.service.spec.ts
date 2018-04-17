import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should return if user is admin', inject([UserService], (service: UserService) => {
    service.user.isAdmin = true
    expect(service.isAdmin()).toEqual(true);
  }));

  it('should update user IsAdmin state', inject([UserService], (service: UserService) => {
    service.setIsAdmin(true)
    expect(service.user.isAdmin).toEqual(true);
  }));
});
