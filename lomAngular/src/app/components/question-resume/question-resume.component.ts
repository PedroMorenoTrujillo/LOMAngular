import { QuizQuestion } from './../tools/questions';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-resume',
  templateUrl: './question-resume.component.html',
  styleUrls: ['./question-resume.component.scss']
})
export class QuestionResumeComponent implements OnInit {

  @Input() quizQuestions: QuizQuestion[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
