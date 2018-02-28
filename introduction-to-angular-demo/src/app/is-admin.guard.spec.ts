import { TestBed, async, inject } from '@angular/core/testing';

import { IsAdminGuard } from './is-admin.guard';
import { UserService } from './user.service'

describe('IsAdminGuard', () => {
  let userServiceStub: UserService
  beforeEach(() => {
    userServiceStub = {
      user: {
        isAdmin: false
      },

      isAdmin() {
        return userServiceStub.user.isAdmin
      },
      setIsAdmin(){}
    }
    TestBed.configureTestingModule({
      providers: [IsAdminGuard, { provide: UserService, useValue: userServiceStub}]
    });
  });

  it('should return false if user is not admin', inject([IsAdminGuard], (guard: IsAdminGuard) => {
    expect(guard.canActivate()).toEqual(false);
  }));

  it('should return if true user is admin', inject([IsAdminGuard], (guard: IsAdminGuard) => {
    userServiceStub.user.isAdmin = true
    expect(guard.canActivate()).toEqual(true);
  }));
});
