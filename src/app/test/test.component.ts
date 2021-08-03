import { Component, Inject, InjectionToken } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { routeParamFactory } from '../utils/activated-route.factories';

export const ROUTEPARAM_ID = new InjectionToken<Observable<string>>(
  'stream of id from route param',
);
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [
    {
      provide: ROUTEPARAM_ID,
      useFactory: routeParamFactory('id'),
      deps: [ActivatedRoute],
    },
  ]
})
export class TestComponent {
  constructor(
    @Inject(ROUTEPARAM_ID) public readonly id$: Observable<string>,
  ) { }


}
