import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todos> = new EventEmitter();
  title: string = '';
  desc: string = '';

  onSubmit() {
    const todo: Todos = {
      sno: new Date(),
      title: this.title,
      desc: this.desc,
      active: true,
    };

    this.todoAdd.emit(todo);
  }
}
