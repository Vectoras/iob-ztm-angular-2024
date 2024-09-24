import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent implements OnInit {
  @Input() private color: 'blue' | 'green' | 'red' = 'blue';

  constructor() {}

  get bgColor(): string {
    return `bg-${this.color}-400`;
  }

  ngOnInit(): void {}
}
