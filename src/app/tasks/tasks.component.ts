import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy_tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './tasksubmit';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input() name?:string;
  @Input() userId!:string;
  isAddingTasks = false;
  tasks = dummyTasks;
  // @Input() name : string | undefined;
  get selectedUserTask()
  {
    return this.tasks.filter((task)=> task.userId === this.userId)
  }

  onCompleteTask(id:string)
  {
    this.tasks = this.tasks.filter((task)=>task.id !== id)
  }

  onStartAddTask()
  {
    this.isAddingTasks = true
  }

  onCloseDialog()
  {
    this.isAddingTasks = false;
  }

  onSubmitNewTask(data:NewTask)
  {
    this.tasks.unshift({
      id: this.randomString(5),
      title:data.title,
      summary:data.summary,
      dueDate:data.date,
      userId: this.userId
    })
    this.onCloseDialog()
  }

  randomString(length:number) {

    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var result = '';

    for ( var i = 0; i < length; i++ ) {

        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));

    }

    return result;

}

}
