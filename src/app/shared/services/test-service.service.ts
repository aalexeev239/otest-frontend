import {Injectable} from '@angular/core';

import {ITest} from '../interfaces/itest';
import {ITestPreview} from '../interfaces/itest-preview';



@Injectable()
export class TestServiceService {

  public getAllTests():ITest[] {
    return this._tests;
  };

  public getTest(index:number):ITest {
    // return this._tests[index];
    return this._tests[0];
  };

  public getAllPreviews():ITestPreview[] {
    return this._previews;
  }

  private _previews: ITestPreview[] = [{
    title: 'Тест на знание условных знаков',
    short_desc: 'Проверьте свои силы, знакомы ли вы со всеми условными знаками?',
    preview_img_url: 'que002.jpeg'
  }];

  private _tests: ITest[] =
    [
      {
        title: 'Тест на знание условных знаков',
        short_desc: 'Проверьте свои силы, знакомы ли вы со всеми условными знаками?',
        full_desc: `В вопросах нужно подобрать правильный условный знак к объекту, 
        изображенному на фотографии. Вам будут предложены четыре варианты ответа, 
        нужно выбрать единственный правильный.`,
        questions: [{
          question: 'Как выглядит железная дорога на карте?',
          question_img_url: 'que002.jpeg',
          answers: [
            {answer_img_url: '515.png'},
            {answer_img_url: '521.png'},
            {answer_img_url: '533.png'},
            {answer_img_url: '534.png'}
          ],
          correct_answer: 0
        }
          , {
            question: 'Как выглядит поляна на карте?'
            ,
            question_img_url: 'que003.jpeg'
            ,
            answers: [
              {answer_img_url: '401.png'},
              {answer_img_url: '407.png'},
              {answer_img_url: '409.png'},
              {answer_img_url: '410.png'}
            ]
            ,
            correct_answer: 0
          }
          ,
          {
            question: 'Как выглядит костровище на карте?',
            question_img_url: 'que004.jpeg',
            answers: [
              {answer_img_url: '539.png'},
              {answer_img_url: '312.png'},
              {answer_img_url: '538.png'},
              {answer_img_url: '530.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            question: 'Как выглядит яма на карте?',
            question_img_url: 'que005.jpeg',
            answers: [
              {answer_img_url: '111.png'},
              {answer_img_url: '114.png'},
              {answer_img_url: '117.png'},
              {answer_img_url: '202.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            question: 'Как выглядит специальный объект на карте?',
            question_img_url: 'que006.jpeg',
            answers: [
              {answer_img_url: '540.png'},
              {answer_img_url: '529.png'},
              {answer_img_url: '528.png'},
              {answer_img_url: '535.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            question: 'Как выглядит микроямка на карте?',
            question_img_url: 'que007.jpeg',
            answers: [
              {answer_img_url: '115.png'},
              {answer_img_url: '209.png'},
              {answer_img_url: '312.png'},
              {answer_img_url: '112.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            question: 'Как выглядит линия электропередачи на карте?',
            question_img_url: 'que008.jpeg',
            answers: [
              {answer_img_url: '517.png'},
              {answer_img_url: '524.png'},
              {answer_img_url: '521.png'},
              {answer_img_url: '504.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            question: 'Как выглядит камень на карте?',
            question_img_url: 'que009.jpeg',
            answers: [
              {answer_img_url: '207.png'},
              {answer_img_url: '312.png'},
              {answer_img_url: '118.png'},
              {answer_img_url: '537.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            question: 'Как выглядит дорога на карте?',
            question_img_url: 'que010.jpeg',
            answers: [
              {answer_img_url: '506.png'},
              {answer_img_url: '533.png'},
              {answer_img_url: '502.png'},
              {answer_img_url: '508.png'}
            ],
            correct_answer: 0
          }
        ]
      }
    ];
}


