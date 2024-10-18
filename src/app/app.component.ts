import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, CommonModule, RouterModule], // Add TodosComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected: styleUrl -> styleUrls
})
export class AppComponent {
  title = 'my-first-project';
}
