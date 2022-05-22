import { Answers } from './../tools/questions';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { QuizQuestion } from '../tools';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss']
})
export class QuestionContainerComponent implements OnChanges {

  @Input() quizQuestion: QuizQuestion = {
    question: '',
    answers: [],
    id: 0,
    type: '',
    success: false,
    userAnswer: ''
  };
  @Output() questionResult = new EventEmitter();
  showAnswerCorrect: boolean = false;
  showAnswerIncorrect: boolean = false;
  correctAnswer: string = 'La respuesta es correcta';
  incorrectAnswer: string = ''
  inputTextValue: string = '';
  incorrectString: string = 'La respuesta es incorrecta. La respuesta correcta es: '

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.resetValues();
  }


  checkAnswer(answer: Answers, type: string): void{
    if(type === 'select'){
      this.checkSelect(answer);
    }else{
      this.checkInput(answer)
    }
    this.questionResult.emit(this.quizQuestion);

  }

  checkSelect(answer: Answers): void{
    if(answer.correct){
      this.showAnswerCorrect = true;
      this.quizQuestion.success = true;
      this.quizQuestion.userAnswer = answer.answer
    }else{
      this.quizQuestion.userAnswer = answer.answer;
      let correct = this.quizQuestion.answers.find(answer => answer.correct)
      this.incorrectAnswer = correct?.answer ?? '';
      this.showAnswerIncorrect = true;
    }
  }

  checkInput(answer: Answers): void{
    if(this.inputTextValue?.toLowerCase() === answer.answer.toLowerCase()){
      this.showAnswerCorrect = true;
      this.quizQuestion.success = true;
      this.quizQuestion.userAnswer = answer.answer;
    }else{
      let correct = this.quizQuestion.answers.find(answer => answer.correct)
      this.incorrectAnswer = correct?.answer ?? ''
      this.showAnswerIncorrect = true;
      this.quizQuestion.userAnswer = this.inputTextValue === '' ? 'No respondiste': this.inputTextValue;
    }
  }

  resetValues(): void{
    this.showAnswerCorrect = false;
    this.showAnswerIncorrect = false;
    this.inputTextValue = '';
  }

}
