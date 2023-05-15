export interface Answer {
  id: string;
  answer: string;
}

export interface Question {
  id: string;
  question: string;
  answers: Answer[];
  correctAnswer: string;
}

export interface Game {
  id: string;
  name: string;
  questions: Question[];
}
