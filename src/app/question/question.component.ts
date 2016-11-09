import {Component, Input, Output, EventEmitter} from '@angular/core';

import {IQuestion} from '../shared/interfaces/iquestion';


@Component({
  selector: 'otest-question',
  templateUrl: './question.component.html',
  styleUrls: ['question.component.less']
})
export class QuestionComponent {

  @Input()
  public question: IQuestion;

  @Output()
  public next: EventEmitter<number> = new EventEmitter();

  public nextClick(index: number): void {
    this.next.emit(index);
  }
}
