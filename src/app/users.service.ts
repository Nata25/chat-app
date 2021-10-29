import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { User } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  // users$: Observable<User[]> = from([]);
  users: User[] = [];

  private genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 0;
  }

  addUser(name: string): void {
    this.users.push({
      name,
      id: this.genId(this.users),
    });
  }

  removeUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
