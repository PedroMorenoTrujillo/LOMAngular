import { Component, OnInit } from '@angular/core';
import { MainComponentTitles } from '../tools';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  mainTexts = MainComponentTitles;
  nextRoute: string = '/quiz';
  
  constructor() { }

  ngOnInit(): void {
  }

}
