import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Message, User } from 'src/types';
import { UsersService } from '../users.service';
import { MessagesService } from '../messages.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
})
export class WindowComponent implements OnInit, OnDestroy {
  constructor(
    private _userService: UsersService,
    private _messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.initUser();
  }

  status: string = 'online';

  @Input() user: User = { name: '', id: 0 };

  messages: Message[] = [];
  message?: string;

  messagesSub: Subscription = this._messagesService.message$.subscribe((msg: Message) => {
    const fullUser = this._userService.users.find((user) => user.id === msg.userId);
    if (fullUser) {
      this.messages.push({
        ...msg,
        userName: fullUser.name,
      });
    }
  });

  removeUser(): void {
    this._userService.removeUser(this.user.id);
    this._messagesService.push(
      this.genMessage(`User ${this.user.name} left conversation.`)
    );
  }

  genMessage(message: string): Message {
    return {
      userId: this.user.id,
      message,
    };
  }

  initUser(): void {
    this._messagesService.push(
      this.genMessage(`User ${this.user.name} joined the conversation.`)
    );
  }

  addMessage(): void {
    if (!this.message) return;
    this._messagesService.push(this.genMessage(this.message));
    this.message = '';
  }

  ngOnDestroy() {
    this.messagesSub.unsubscribe();
  }
}
