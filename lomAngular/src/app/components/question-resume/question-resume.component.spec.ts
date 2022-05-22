import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionResumeComponent } from './question-resume.component';

describe('QuestionResumeComponent', () => {
  let component: QuestionResumeComponent;
  let fixture: ComponentFixture<QuestionResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
