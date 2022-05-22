import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.scss']
})
export class QuizHeaderComponent implements OnInit {

  correct: number = 0;
  incorrect: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
