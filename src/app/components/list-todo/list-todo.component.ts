import { Component } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-list-todo',
  standalone: false,
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css',
})
export class ListTodoComponent {
  todos: string[] = [];
  constructor(private todoService: TodoListService) {
    this.todos = this.todoService.getAll();
  }
}
