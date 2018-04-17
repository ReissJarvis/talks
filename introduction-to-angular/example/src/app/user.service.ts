import { Injectable } from '@angular/core';

export interface User {
  isAdmin: boolean
}

@Injectable()
export class UserService {
  user:User =  {
    isAdmin: false
  }
  constructor() { }

  isAdmin() {
    return this.user.isAdmin
  }

  setIsAdmin(isAdmin) {
    this.user.isAdmin = isAdmin
  }

}
