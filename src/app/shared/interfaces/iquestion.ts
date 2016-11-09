export interface IQuestion {
  id: number,
  question: string,
  question_img_url: string,
  answers: {
    answer_img_url: string
  }[],
  correct_answer: number,
  user_answer?: number
}
