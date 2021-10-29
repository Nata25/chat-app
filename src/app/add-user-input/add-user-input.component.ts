import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-input',
  templateUrl: './add-user-input.component.html',
  styleUrls: ['./add-user-input.component.scss'],
})
export class AddUserInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onAddUser(): void {
    console.log('user added');
  }
}
