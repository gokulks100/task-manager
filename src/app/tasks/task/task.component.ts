import { Component,EventEmitter,Input, Output } from '@angular/core';
import { type Task } from './task';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})

export class TaskComponent {
  @Input({required:true}) task!:Task;
  @Output() complete =  new EventEmitter<string>()


  onCompleteTask()
  {
    this.complete.emit(this.task.id);
  }

}
