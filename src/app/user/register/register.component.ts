import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl([]),
    email: new FormControl([]),
    age: new FormControl([]),
    password: new FormControl([]),
    confirm_password: new FormControl([]),
    phoneNumber: new FormControl([]),
  });
}
