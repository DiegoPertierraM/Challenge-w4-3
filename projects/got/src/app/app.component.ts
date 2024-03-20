import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { CardComponent } from './features/card/card.component';
import { getCharacters } from '../app/core/data';
import { Character } from './core/models/character';

@Component({
  selector: 'isdi-root',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  template: `
    <isdi-header [title]="'Juego de Tronos'" />
    <main>
      <ul class="characters-list">
        @for (character of characters; track $index) {
        <isdi-card [character]="character" />}
      </ul>
    </main>
  `,
  styles: ``,
})
export class AppComponent {
  title = 'got';
  characters: Character[] = [];

  constructor() {
    this.onLoad();
  }

  onLoad() {
    getCharacters().then((characters) => {
      this.characters = characters;
      console.log(characters);
    });
  }
}
