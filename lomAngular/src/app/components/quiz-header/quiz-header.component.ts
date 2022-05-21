import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.scss']
})
export class QuizHeaderComponent implements OnInit {

  success: number = 0;
  fail: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
