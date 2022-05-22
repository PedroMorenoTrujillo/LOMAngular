import { Component, Input, OnInit } from '@angular/core';
import { QuizQuestion } from '../tools';
import { quizQuestions } from './tools';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizQuestions: QuizQuestion[] = quizQuestions;
  index: number = 0;
  showNextQuestion: boolean = false;
  showQuizResume: boolean = false;
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
    console.log(this.quizQuestions)
  }

}
