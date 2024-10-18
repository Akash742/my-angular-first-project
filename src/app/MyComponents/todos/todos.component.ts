import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Todos } from '../../Todos';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'], // Note: Change 'styleUrl' to 'styleUrls'
})
export class TodosComponent implements OnInit {
  localItem: string | null | undefined;
  todo: Todos[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.todo = [];

    // Check if we are running in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem('todo');
      if (this.localItem === null) {
        this.todo = [];
      } else {
        this.todo = JSON.parse(this.localItem);
        console.log(this.todo);
      }
    }
  }

  ngOnInit(): void {}

  addTodo(todo: Todos) {
    console.log('Add Todo: ', todo);
    this.todo?.push(todo);

    // Update localStorage only if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('todo', JSON.stringify(this.todo));
    }
  }

  deleteTodo(todo: Todos) {
    const index: number = this.todo?.indexOf(todo);
    if (index !== -1) {
      this.todo.splice(index, 1);

      // Update localStorage only if we are in the browser
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('todo', JSON.stringify(this.todo));
      }
      console.log(todo);
    }
  }

  toggleTodo(todo: Todos) {
    const index = this.todo?.indexOf(todo);

    if (index !== -1) {
      this.todo[index].active = !this.todo[index].active;

      // Update localStorage only if we are in the browser
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('todo', JSON.stringify(this.todo));
      }
      console.log(todo);
    }
  }
}
