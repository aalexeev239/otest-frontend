import {Component} from '@angular/core';

import {ITest} from './shared/interfaces/itest';

import {TestService} from './shared/services/test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService]
})
export class AppComponent {
  public currentTest: ITest;

  constructor(private _testService: TestService) {
    this.currentTest = _testService.getTest(0);
  }
}
