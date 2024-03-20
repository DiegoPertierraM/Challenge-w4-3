import { Component, Input } from '@angular/core';
import { Character } from '../../core/models/character';

@Component({
  selector: 'isdi-card',
  standalone: true,
  imports: [],
  template: `
    <li class="character col">
      <div class="card character__card">
        <img
          [src]="'assets/img/' + character.name.toLowerCase() + '.jpg'"
          [alt]="'Foto de ' + character.name + ' ' + character.house"
          class="character__picture card-img-top"
        />
        <div class="card-body">
          <h2 class="character__name card-title h4">
            {{ character.name }} {{ character.house }}
          </h2>
          <div class="character__info">
            <ul class="list-unstyled">
              <li>Edad: {{ character.age }} años</li>
              <li>
                Estado:
                <span class="character__status">
                  <!-- {{ renderLive(character.isAlive) }} -->
                </span>
              </li>
            </ul>
          </div>
          <div class="character__overlay">
            <ul class="list-unstyled">
              <!-- {{
              selectCharacterData(character)
            }} -->
            </ul>
            <div class="character__actions">
              <button class="character__action btn talk">habla</button>
              <button class="character__action btn kill">muere<</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  `,
  styles: ``,
})
export class CardComponent {
  @Input({ required: true }) character!: Character;
  // renderLive();
  // selectCharacterData = (character: anyCharacter) => {
  //   switch (character.type) {
  //     case 'king':
  //       return ` <li>Años de reinado:
  //     ${(character as King).kingdomYears}</li>`;
  //     case 'fighter':
  //       return `<li>Arma:   ${(character as Fighter).weapon}</li>
  //           <li>Destreza: ${(character as Fighter).skillsRange}</li>`;
  //     case 'counselor':
  //       return `
  //           <li>Asesora a: ${(character as Counselor).lord.name}</li>`;
  //     case 'squire':
  //       return `
  //     <li>Peloteo: ${(character as Squire).serverRange}</li>
  //     <li>Sirve a: ${(character as Squire).master.name}</li>
  //     `;
  //     default:
  //       return '';
  //   }
  // };
}
