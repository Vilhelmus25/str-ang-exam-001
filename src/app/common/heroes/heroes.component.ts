import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  listOfHeroes: Hero[];

  constructor(private heroService: HeroService) {
    this.listOfHeroes = heroService.getAll();
  }

  ngOnInit(): void {
  }

}
