import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '../../Todos';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo: Todos | undefined;
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter();
  @Output() todoToggle: EventEmitter<Todos> = new EventEmitter();
  
  onClick(todo: Todos | undefined) {
    this.todoDelete.emit(todo);
    
    console.log('Click has been triggered!!');
  }
  onCheck(todo: Todos | undefined) {
    this.todoToggle.emit(todo);
  }
}
