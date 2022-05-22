import { QuizResults } from './tools/results.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.scss']
})
export class QuizHeaderComponent implements OnInit {

  @Input() results: QuizResults = {correct: 0, incorrect: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
