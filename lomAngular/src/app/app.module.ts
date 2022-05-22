import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizHeaderComponent } from './components/quiz-header/quiz-header.component';
import { QuestionContainerComponent } from './components/question-container/question-container.component';
import { QuestionResumeComponent } from './components/question-resume/question-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    QuizComponent,
    QuizHeaderComponent,
    QuestionContainerComponent,
    QuestionResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
