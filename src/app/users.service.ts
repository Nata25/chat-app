import { Injectable } from '@angular/core';
import { User } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  users: User[] = [];
  lastUserId: number = 0;

  addUser(name: string): void {
    this.users.push({
      name,
      id: this.lastUserId++,
    });
  }

  removeUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
