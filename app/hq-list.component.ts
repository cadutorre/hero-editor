import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {HQ} from './hq';
import {HQService} from './hq.service';

@Component({
  selector: 'hq-list',
  templateUrl: 'app/hq-list.component.html',
  styleUrls:['app/hq-list.component.css']
})

export class HqListComponent implements OnInit {
  hqs: HQ[];
  selectedHQ: HQ;

  constructor(private _hqService: HQService, private _router: Router) { }

  ngOnInit() {
    this._hqService.getHQs().then(hqs=> this.hqs = hqs);
  }

  onSelect(hq: HQ) { this.selectedHQ = hq; }

  /*gotoDetail(){
    this._router.navigate(['HeroDetail', {id: this.selectedHero.id }]);
  }*/
}
