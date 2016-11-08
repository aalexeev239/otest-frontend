import {Injectable} from '@angular/core';

import {ITest} from '../interfaces/itest';
import {ITestPreview} from '../interfaces/itest-preview';

@Injectable()
export class TestService {

  public getAllTests(): ITest[] {
    return this._tests;
  };

  public getTest(index: number): ITest {
    // return this._tests[index];
    return this._tests[0];
  };

  public getAllPreviews(): ITestPreview[] {
    return this._previews;
  }

  private _previews: ITestPreview[] = [{
    title: 'Тест на знание условных знаков',
    short_desc: 'Проверьте свои силы, знакомы ли вы со всеми условными знаками?',
    preview_img_url: 'assets/tests/test_01/que002_1000.jpg'
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
          id: 1,
          question: 'Как выглядит развилка тропинок на карте?',
          question_img_url: 'assets/tests/test_01/que001_1000.jpg',
          answers: [
            {answer_img_url: 'assets/tests/znaki/508.png'},
            {answer_img_url: 'assets/tests/znaki/513.png'},
            {answer_img_url: 'assets/tests/znaki/517.png'},
            {answer_img_url: 'assets/tests/znaki/531.png'}
          ],
          correct_answer: 0
        },
          {
          id: 2,
          question: 'Как выглядит железная дорога на карте?',
          question_img_url: 'assets/tests/test_01/que002_1000.jpg',
          answers: [
            {answer_img_url: 'assets/tests/znaki/515.png'},
            {answer_img_url: 'assets/tests/znaki/521.png'},
            {answer_img_url: 'assets/tests/znaki/533.png'},
            {answer_img_url: 'assets/tests/znaki/534.png'}
          ],
          correct_answer: 0
        }
          , {
            id: 3,
            question: 'Как выглядит поляна на карте?'
            ,
            question_img_url: 'assets/tests/test_01/que003_1000.jpg'
            ,
            answers: [
              {answer_img_url: 'assets/tests/znaki/401.png'},
              {answer_img_url: 'assets/tests/znaki/407.png'},
              {answer_img_url: 'assets/tests/znaki/409.png'},
              {answer_img_url: 'assets/tests/znaki/410.png'}
            ]
            ,
            correct_answer: 0
          }
          ,
          {
            id: 4,
            question: 'Как выглядит костровище на карте?',
            question_img_url: 'assets/tests/test_01/que004_1000.jpg',
            answers: [
              {answer_img_url: 'assets/tests/znaki/539.png'},
              {answer_img_url: 'assets/tests/znaki/312.png'},
              {answer_img_url: 'assets/tests/znaki/538.png'},
              {answer_img_url: 'assets/tests/znaki/530.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            id: 5,
            question: 'Как выглядит яма на карте?',
            question_img_url: 'assets/tests/test_01/que005_1000.jpg',
            answers: [
              {answer_img_url: 'assets/tests/znaki/111.png'},
              {answer_img_url: 'assets/tests/znaki/114.png'},
              {answer_img_url: 'assets/tests/znaki/117.png'},
              {answer_img_url: 'assets/tests/znaki/202.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            id: 6,
            question: 'Как выглядит специальный объект на карте?',
            question_img_url: 'assets/tests/test_01/que006_1000.jpg',
            answers: [
              {answer_img_url: 'assets/tests/znaki/540.png'},
              {answer_img_url: 'assets/tests/znaki/529.png'},
              {answer_img_url: 'assets/tests/znaki/528.png'},
              {answer_img_url: 'assets/tests/znaki/535.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            id: 7,
            question: 'Как выглядит микроямка на карте?',
            question_img_url: 'assets/tests/test_01/que007_1000.jpg',
            answers: [
              {answer_img_url: 'assets/tests/znaki/115.png'},
              {answer_img_url: 'assets/tests/znaki/209.png'},
              {answer_img_url: 'assets/tests/znaki/312.png'},
              {answer_img_url: 'assets/tests/znaki/112.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            id: 8,
            question: 'Как выглядит линия электропередачи на карте?',
            question_img_url: 'assets/tests/test_01/que008_1000.jpg',
            answers: [
              {answer_img_url: 'assets/tests/znaki/517.png'},
              {answer_img_url: 'assets/tests/znaki/524.png'},
              {answer_img_url: 'assets/tests/znaki/521.png'},
              {answer_img_url: 'assets/tests/znaki/504.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            id: 9,
            question: 'Как выглядит камень на карте?',
            question_img_url: 'assets/tests/test_01/que009_1000.jpg',
            answers: [
              {answer_img_url: 'assets/tests/znaki/207.png'},
              {answer_img_url: 'assets/tests/znaki/312.png'},
              {answer_img_url: 'assets/tests/znaki/118.png'},
              {answer_img_url: 'assets/tests/znaki/537.png'}
            ],
            correct_answer: 0
          }
          ,
          {
            id: 10,
            question: 'Как выглядит дорога на карте?',
            question_img_url: 'assets/tests/test_01/que010_1000.jpg',
            answers: [
              {answer_img_url: 'assets/tests/znaki/506.png'},
              {answer_img_url: 'assets/tests/znaki/533.png'},
              {answer_img_url: 'assets/tests/znaki/502.png'},
              {answer_img_url: 'assets/tests/znaki/508.png'}
            ],
            correct_answer: 0
          }
        ]
      }
    ];
}
