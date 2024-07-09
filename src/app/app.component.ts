import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ztm-angular';
  name = 'Luis';
  imageUrl = 'https://picsum.photos/id/237/500/500'

  getName() {
    return this.name;
  }

  changeImage (e: KeyboardEvent) {
    this.imageUrl=(e.target as HTMLInputElement).value;
  }
}
