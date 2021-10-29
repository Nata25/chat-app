import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chat-app';

  constructor(public _usersService: UsersService) {}

  // users$: Observable<User[]> = this._usersService.users$

  ngOnInit() {}
}
