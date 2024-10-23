import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { TasksModule } from "./tasks/tasks.module";
@NgModule({
  declarations: [

  ],
  bootstrap:[

  ],
  imports:[
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TasksModule,
    AppComponent,

  ],
  providers:[],
})

export class AppModule{

}
