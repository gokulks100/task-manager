import { Injectable } from '@angular/core';
import { dummyTasks } from '../../dummy_tasks';
import { type NewTask } from '../tasksubmit';

@Injectable({
  providedIn: 'root',
})
export class TaskSevice {
  tasks = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(data: NewTask, userId: string) {
    this.tasks.unshift({
      id: this.randomString(5),
      title: data.title,
      summary: data.summary,
      dueDate: data.date,
      userId: userId,
    });
    this.saveTasks()
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks()
  }

  randomString(length: number) {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var result = '';

    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }

    return result;
  }

  saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
