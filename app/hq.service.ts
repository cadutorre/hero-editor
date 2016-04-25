import {Injectable} from 'angular2/core';
import {HQ} from './hq';
import {HQS} from './mock-hqs';

@Injectable()
export class HQService {
  getHQs() {
    return Promise.resolve(HQS);
  }

  getHQ(id: number) {
    return Promise.resolve(HQS).then(hqs => hqs.filter(hq=> hq.id === id)[0]);
  }
}
