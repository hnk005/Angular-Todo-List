import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListService } from './services/todo-list.service';

@NgModule({
  declarations: [AppComponent, FormComponent, ListTodoComponent],
  imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [TodoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
