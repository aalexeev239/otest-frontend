import {IQuestion} from './iquestion';

export interface ITest {
  title: string,
  short_desc: string,
  full_desc: string,
  questions: IQuestion[]
}
