import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { ListComponent } from './features/list/list.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [HeaderComponent, ListComponent],
  template: `
    <isdi-header [title]="'Juego de Tronos'" />
    <main>
      <isdi-list />
    </main>
  `,
  styles: `
  main {
    height: 100vh;
  }
  `,
})
export class AppComponent {
  title = 'got';
}
