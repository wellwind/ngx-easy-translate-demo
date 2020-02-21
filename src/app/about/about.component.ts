import { Component, Inject, OnInit } from '@angular/core';
import {
  FEATURE_TRANSLATE,
  ROOT_TRANSLATE
} from '@wellwind/ngx-easy-translate';
import { Observable } from 'rxjs';
import { HomeTranslate } from '../home/type';
import { RootTranslate } from '../type';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(
    @Inject(ROOT_TRANSLATE) public rootTranslate: Observable<RootTranslate>,
    @Inject(FEATURE_TRANSLATE)
    public featureTranslate: Observable<HomeTranslate>
  ) {}

  ngOnInit(): void {}
}
