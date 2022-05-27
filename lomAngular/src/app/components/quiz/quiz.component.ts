import { QuizResults } from './../quiz-header/tools/results.model';
import { Component, Input, OnInit } from '@angular/core';
import { QuizQuestion } from '../../tools';
import { quizQuestions } from './tools';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizQuestions: QuizQuestion[] = JSON.parse(JSON.stringify(quizQuestions));
  index: number = 0;
  showNextQuestion: boolean = false;
  showQuizResume: boolean = false;
  results: QuizResults = {correct: 0, incorrect: 0};
  backToIntro: string = '/'

  constructor() { }

  ngOnInit(): void {
  }

  nextQuestion(): void{
    this.showNextQuestion = false;
    this.index++;
    if(this.index === this.quizQuestions.length){
      this.showQuizResume = true;
    }
  }

  questionResult(quizQuestion: QuizQuestion): void{
    this.showNextQuestion = true;
    this.score(quizQuestion);
  }

  score(quizQuestion: QuizQuestion): void{
    let correctResults = this.quizQuestions.filter(result => result.success);
    this.results = {correct: correctResults.length, incorrect: Math.abs(quizQuestion.id - correctResults.length)}
  }

}
