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
  name = "Angular";

  updateName(val:Event){
    this.name = (val.target as HTMLInputElement).value;
    
    
  }
}


