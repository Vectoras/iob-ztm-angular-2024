import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  @Input() public tabTitle = '';
  @Input() active = false;

  constructor() {}
}
