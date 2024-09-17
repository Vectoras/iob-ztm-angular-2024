import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.scss',
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  public selectTab(tab: TabComponent): false {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });

    tab.active = true;

    // prevent default behaviour of the click event
    return false;
  }
}
