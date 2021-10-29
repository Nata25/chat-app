import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddUserInputComponent } from './add-user-input/add-user-input.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [AppComponent, AddUserInputComponent, WindowComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
