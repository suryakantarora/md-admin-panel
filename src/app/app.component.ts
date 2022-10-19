import { Component } from '@angular/core';

import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-panel';
  username = new FormControl('', [Validators.required, Validators.minLength(5)]);

  getErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter a value';
    }

    return this.username.hasError('minLength') ? 'Not a valid username' : '';
  }
}
