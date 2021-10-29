import { Component, Input, OnInit } from '@angular/core';
import { Message, User } from 'src/types';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements OnInit {
  constructor(private _userService: UsersService) {}

  ngOnInit(): void {}

  status: string = 'online';

  @Input() user?: User;

  messages: Message[] = [
    {
      userId: 1,
      message: 'Tomas has entered chat',
    },
    {
      userId: 2,
      message: 'Hi guys',
    },
  ];

  removeUser(): void {
    if (this.user) this._userService.removeUser(this.user.id);
  }
}
