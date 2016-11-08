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
  public wrongQuestions: IQuestion[];
  public questionsLength: number;

  public usersAnswers: number[] = [];

  private questionsCursor: number;

  public isRunning: boolean;
  public isOver: boolean;
  public result: number;


  ngOnInit() {
    this.isRunning = false;
    this.isOver = false;
    this.questionsLength = this.test.questions.length;
  }


  public startTest(): void {
    this.isRunning = true;
    this.isOver = false;
    this.questionsCursor = 0;
    this.usersAnswers = [];

    this.currentQuestion = this.test.questions[this.questionsCursor];
  }

  public finishTest(): void {
    this.isRunning = false;
    this.isOver = true;
    this.currentQuestion = this.test.questions[0];
    this.result = this.validate();
  }


  public getNextQuestion(index: any): void {
    this.usersAnswers[this.questionsCursor] = index;

    if (this.questionsCursor < this.questionsLength - 1) {
      this.questionsCursor++;
      this.currentQuestion = this.test.questions[this.questionsCursor];
    } else {
      this.finishTest();
    }
  }

  private validate(): number {
    // return this.test.questions.reduce((prev, current, index) => {
    //   return current.correct_answer === this.usersAnswers[index] ? prev : prev + 1;
    // }, 0);

    this.wrongQuestions = [];
    let length = 0;
    this.test.questions.forEach((question, index)=>{
      if (question.correct_answer !== this.usersAnswers[index]) {
        this.wrongQuestions.push(question);
        this.wrongQuestions[length].user_answer = this.usersAnswers[index];
        length++;
      }
    });

    return length;
  }
}
