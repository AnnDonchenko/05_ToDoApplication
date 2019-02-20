import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatListModule, MatIconModule, MatCheckboxModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './componetns/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
