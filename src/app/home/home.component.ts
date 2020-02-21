import { Component, Inject, OnInit } from '@angular/core';
import {
  FEATURE_TRANSLATE,
  ROOT_TRANSLATE
} from '@wellwind/ngx-easy-translate';
import { Observable } from 'rxjs';
import { RootTranslate } from '../type';
import { HomeTranslate } from './type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    @Inject(ROOT_TRANSLATE) public rootTranslate: Observable<RootTranslate>,
    @Inject(FEATURE_TRANSLATE)
    public featureTranslate: Observable<HomeTranslate>
  ) {}

  ngOnInit(): void {}
}
