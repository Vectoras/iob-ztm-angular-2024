import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import {
  TitleCasePipe,
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  JsonPipe,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  NgIf,
  NgFor,
} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PostComponent,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    NgClass,
    NgStyle,
    NgTemplateOutlet,
    NgIf,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ztm-angular';
  name = 'luis ramirez';
  imageUrl = 'https://picsum.photos/id/237/500/500';
  images = [
    'https://picsum.photos/id/310/500/500',
    'https://picsum.photos/id/320/500/500',
    'https://picsum.photos/id/330/500/500',
  ];
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large',
  };
  blueClass = false;
  fontSize = 16;

  // -----------------------------

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
