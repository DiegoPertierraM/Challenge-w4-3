export type CharacterType = 'king' | 'fighter' | 'counselor' | 'squire';

export interface Character {
  name: string;
  house: string;
  age: number;
  isAlive: boolean;
  type: CharacterType | '';
  message: string;
  yearsReigning?: number;
  weapon?: string;
  skillsRange?: number;
  lord?: CharacterType;
  master?: CharacterType;
  serverRange?: number;
}

export interface King extends Character {
  kingdomYears: number;
}

export interface Fighter extends Character {
  weapon: string;
  skillsRange: number;
}

export interface Counselor extends Character {
  lord: CharacterType;
}

export interface Squire extends Character {
  master: CharacterType;
  serverRange: number;
}
