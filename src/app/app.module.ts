import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    TestComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
