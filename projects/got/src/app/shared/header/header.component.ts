import { Component, Input } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
  `,
  styles: `
    :host {
      background-color: rgb(100, 60, 35);
      height: 100px;
      color: black;
      text-align: center;
      font-family: "Cinzel", serif;
      padding-block-start: 2rem;
    }

    h1 {
      font-weight: 900;
      color: #331c0e;
    }

    h2 {
      text-align: center;
    }
  `,
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
}
