import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstTodoApp';


ngOnInit(){}

  onClick(){
    console.log('On Click event working');
  }
}