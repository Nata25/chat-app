import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor() {}

  message$ = new Subject<Message>();

  push(message: Message) {
    this.message$.next(message);
  }
}
