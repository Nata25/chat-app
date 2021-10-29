import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user-input',
  templateUrl: './add-user-input.component.html',
  styleUrls: ['./add-user-input.component.scss'],
})
export class AddUserInputComponent implements OnInit {
  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {}

  input: string = '';

  onAddUser(): void {
    this._usersService.addUser(this.input);
    this.input = '';
  }
}
