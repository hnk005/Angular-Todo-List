import { Component, Input } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
//
export class FormComponent {
  constructor(private todoService: TodoListService) {}

  todoForm = new FormGroup({
    todo: new FormControl(''),
  });

  handleSubmit() {
    if (this.todoForm.value.todo) {
      this.todoService.saveTodo(this.todoForm.value.todo);
      this.handleClear();
      window.location.reload();
    }
  }

  handleClear() {
    this.todoForm.setValue({ todo: '' });
  }
}
