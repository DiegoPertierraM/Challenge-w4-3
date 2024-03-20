import { Component } from '@angular/core';
import { Character } from '../../core/models/character';
import { CardComponent } from '../card/card.component';
import { getCharacters } from '../../core/data';

@Component({
  selector: 'isdi-list',
  standalone: true,
  imports: [CardComponent],
  template: `
    <ul class="characters-list">
      @for (character of characters; track $index) {
      <isdi-card [character]="character" />}
    </ul>
  `,
  styles: ``,
})
export class ListComponent {
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
