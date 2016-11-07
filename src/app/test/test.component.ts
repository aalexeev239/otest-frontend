import {Component, OnInit, Input} from '@angular/core';

import {ITest} from '../shared/interfaces/itest';
import {IQuestion} from '../shared/interfaces/iquestion';


@Component({
  selector: 'otest-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input()
  public test: ITest;

  public currentQuestion: IQuestion;
  private _currentQuestionIndex: number;
  private _questionsLength: number;

  public isRunning: boolean;
  public isOver: boolean;


  ngOnInit() {
    this.isRunning = false;
    this.isOver = false;
    this._questionsLength = this.test.questions.length;
  }


  public startTest(): void {
    this.isRunning = true;
    this.isOver = false;
    this._currentQuestionIndex = 0;
    this.currentQuestion = this.test.questions[this._currentQuestionIndex];
  }

  public finishTest(): void {
    this.isRunning = false;
    this.isOver = true;
    this.currentQuestion = this.test.questions[0];
  }


  public getNextQuestion(index: any): void {
    console.log('--- index', index);

    if (this._currentQuestionIndex < this._questionsLength - 1) {
      this._currentQuestionIndex++;
      this.currentQuestion = this.test.questions[this._currentQuestionIndex];
    } else {
      this.finishTest();
    }
  }
}
