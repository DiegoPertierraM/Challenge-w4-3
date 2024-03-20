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
                  @if (character.isAlive) {
                  <i class="fas fa-thumbs-up"></i>
                  } @else {
                  <i class="fas fa-thumbs-down"></i>
                  }
                </span>
              </li>
            </ul>
          </div>
          <div class="character__overlay">
            <ul class="list-unstyled">
              @switch (character.type) { @case ('king') {
              <li>Años de reinado: {{ character.yearsReigning }}</li>
              } @case ('fighter') {
              <li>Arma: {{ character.weapon }}</li>
              <li>Destreza: {{ character.skillsRange }}</li>
              } @case ('counselor') {
              <li>Asesora a: {{ character.lord }}</li>
              } @case ('squire') {
              <li>Peloteo: {{ character.serverRange }}</li>
              <li>Sirve a: {{ character.master }}</li>
              } }
            </ul>
            <div class="character__actions">
              <button
                class="character__action btn talk"
                (click)="talk($event)"
                id="{{ character.name }}"
              >
                habla
              </button>
              <button class="character__action btn click" (click)="kill()">
                muere
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="comunications" id="{{ character.name }}">
        <p class="comunications__text display-1">{{ character.message }}</p>
        <img
          class="comunications__picture"
          src="assets/img/{{ character.name.toLowerCase() }}.jpg"
          alt="Foto de {{ character.name }} {{ character.house }}"
        />
      </div>
    </li>
  `,
  styles: ``,
})
export class CardComponent {
  @Input({ required: true }) character!: Character;

  talk($event: Event) {
    const id = ($event.target as HTMLButtonElement).id;
    const comunications = document.querySelector('div#' + id);
    comunications?.classList.add('on');
    setTimeout(() => {
      comunications?.classList.remove('on');
    }, 2000);
  }

  kill() {
    this.character.isAlive = false;
  }
}
