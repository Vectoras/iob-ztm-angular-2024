import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input() type: 'text' | 'email' | 'number' | 'password' = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() control = new FormControl();
  @Input() format = '';

  constructor() {}

  ngOnInit(): void {}
}
