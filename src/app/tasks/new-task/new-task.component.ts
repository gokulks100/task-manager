import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../tasksubmit';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  title = '';
  date = '';
  summary = '';

  onClose() {
    this.close.emit();
  }

  onSave() {
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.date,
    });
  }
}
