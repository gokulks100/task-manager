import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../tasksubmit';
import { TaskSevice } from '../service/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
  standalone:true,
  imports:[
    FormsModule
  ]
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTask>();

  private TaskService = inject(TaskSevice)

  title = '';
  date = '';
  summary = '';

  onClose() {
    this.close.emit();
  }

  onSave() {
    const submitData = {
      title: this.title,
      summary: this.summary,
      date: this.date,
    };
    this.TaskService.addTask(submitData, this.userId);
    this.onClose();
    // this.add.emit({

    // });
  }
}
