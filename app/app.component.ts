import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

import {HeroService} from './hero.service';

import {HqListComponent} from './hq-list.component';

import {HQService} from './hq.service';


@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls:['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService, HQService]
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/hqlist',
    name: 'HqList',
    component: HqListComponent,
    useAsDefault: true
  },
])

export class AppComponent {
  title = 'Tour of Heroes';
}
