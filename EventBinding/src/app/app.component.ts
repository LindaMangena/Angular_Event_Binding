import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstTodoApp';
  public greeting = '';


ngOnInOnit(){}

  onClick(){
    console.log('Click event working ')
    this.greeting = 'Linda'

  }
}
