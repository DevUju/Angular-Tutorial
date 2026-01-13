import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
// import { ReversePipe } from './reverse-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('counter-app');
  
  task = ""
  taskList:{id: number, name: string, completed: boolean}[] = []

  addTask(){
    this.taskList.push({id:this.taskList.length + 1, name:this.task, completed:false})
    this.task = ""
  }

  taskCompleted(id:number){
    const taskId = this.taskList.findIndex(task => task.id === id);
    this.taskList[taskId].completed = !this.taskList[taskId].completed
  }

  deleteTask(id:number){
    this.taskList = this.taskList.filter(task => task.id !== id);
    this.taskList = this.taskList.map((task, index) => ({...task, id: index + 1}) );
  }
}


