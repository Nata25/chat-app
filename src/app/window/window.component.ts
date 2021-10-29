import { Component, OnInit } from '@angular/core';
import { Message } from 'src/types';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  username: string = 'Tomas';
  status: string = 'online';
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
}
