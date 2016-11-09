import {Component, Input} from '@angular/core';

import {IQuestion} from '../shared/interfaces/iquestion';


@Component({
  selector: 'otest-question-result',
  templateUrl: './question-result.component.html',
  styleUrls: ['question-result.component.less']
})
export class QuestionResultComponent {

  @Input()
  public question: IQuestion;
}
