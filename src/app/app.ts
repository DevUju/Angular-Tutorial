import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('counter-app');

  //   count:number = 0

  //   increase (){
  //     this.count = this.count + 1
  //   }

  //   decrease (){
  //     if (this.count === 0) {
  //       this.count = 0
  //     } else {
  //     this.count = this.count - 1
  //     }
  //   }

  //   reset (){
  //     this.count = 0
  //   }

  //   counterFunction (val:string){
  //     if (val === 'plus'){
  //       this.count = this.count + 1
  //     } else if (val === 'minus'){
  //       if (this.count === 0) {
  //         this.count = 0
  //       } else {
  //       this.count = this.count - 1
  //       }
  //   } else if (val === 'reset'){
  //     this.count = 0
  //   }
  // }





  //   username:string = ''

  //   getUserName (event:Event) {
  //     this.username = (event.target as HTMLInputElement).value
  //     console.log(this.username)
  //   }

  //   setUserName () {
  //     this.username = "Obianuju"
  // }

  //   getUserNameField (val:string) {
  //     this.username = val
  //     console.log(this.username)
  // }




  // display = true
  // displayOneDiv = true

  // hide(){
  //   this.display = false
  // }

  // show(){
  //   this.display = true
  // }

  // toggleDisplay () {
  //   this.display = !this.display
  // }

  // displayDiv () {
  //   this.displayOneDiv = !this.displayOneDiv
  // }




  // color = "orange"

  // changeColour (val:string) {
  //   this.color = val
  // }

  // getColour (event:Event) {
  //   this.color = (event.target as HTMLInputElement).value.trim().toLowerCase()
  // }



  // users = ["Uju", "Chidi", "Ifeoma", "Kelechi"]

  // employees = [
  //   {name: "Obianuju", age: 25, job: "Developer"},
  //   {name: "Chukwuemeka", age: 30, job: "Designer"},
  //   {name: "Amaka", age: 28, job: "Manager"},
  //   {name: "Ikenna", age: 35, job: "Tester"}
  // ]

  // getEmployeeName(val:string) {
  //   console.log(val)
  // }



  handleEvents(event: Event) {
    console.log('Event handled at the component level :', event.type);
  }
}