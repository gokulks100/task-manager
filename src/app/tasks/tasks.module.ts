import { NgModule } from "@angular/core";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { FormsModule } from "@angular/forms";
import { CommonModule, DatePipe } from "@angular/common";
import { TasksComponent } from "./tasks.component";


 @NgModule({
    declarations:[

    ],
    imports:[
      FormsModule,
      CommonModule,
      DatePipe
    ],
    exports:[

    ]
 })

 export class TasksModule{

 }
