import { Injectable } from '@angular/core';
import { Hero } from '../common/hero/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroesList: Hero[] = [
    { id: 1, name: 'Batface', superPower: 'Always available', address: 'Gotham' },
    { id: 2, name: 'SuperGai', superPower: 'Vertical flight', address: 'New York' },
    { id: 3, name: 'Guardinator', superPower: 'Can drive a choppa', address: 'Los Angeles' },
    { id: 4, name: 'DerpBoy', superPower: 'Best Apprentince', address: 'Halgard' },
    { id: 5, name: 'Dragonborn', superPower: 'Dragon shout', address: 'Skyrim' },
  ]

  constructor() { }

  getAll(): Hero[] {
    return this.heroesList;
  }
}
