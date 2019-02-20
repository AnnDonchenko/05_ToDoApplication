import {Component, Input, OnInit} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public data: DataService) {  }

  ngOnInit(): void {
    if (localStorage.todos) {
      this.data.toDos = JSON.parse(localStorage.todos as string);
    }
  }
}
