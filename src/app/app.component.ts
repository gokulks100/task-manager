import { Component , signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,  HeaderComponent , UserComponent,TasksComponent ,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task Manager';

  users = DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser() {
   return  this.users.find((user)=> user.id === this.selectedUserId);
  }

  selectUser(id:string)
  {
    this.selectedUserId = id;
  }

}
