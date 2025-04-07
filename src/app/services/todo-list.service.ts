import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  data: string[] = [];
  constructor() {
    this.data = this.getAll();
  }

  getAll(): string[] {
    const data = localStorage.getItem('todo');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  saveTodo(todo: string) {
    const data = this.getAll();
    data.push(todo);

    localStorage.setItem('todo', JSON.stringify(data));
    return data;
  }
}
