import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color = 'white';
  fontColor = '#333';
  title = 'unittest';
  theme = 'light';

  handleChangeTheme() {
    this.color = this.theme === 'light' ? 'black' : 'white';
    this.fontColor = this.theme === 'light' ? 'white' : '#333';
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
