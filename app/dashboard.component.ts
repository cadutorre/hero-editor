import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  directives: [DashboardComponent]
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private _heroService: HeroService) { }
  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  gotoDetail() {  }
}
