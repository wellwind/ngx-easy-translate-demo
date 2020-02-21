import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEasyTranslateModule } from '@wellwind/ngx-easy-translate';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEasyTranslateModule.forRoot({
      defaultLang: 'en',
      loader: lang => from(import(`./i18n/${lang}`).then(result => result.lang))
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
