import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goal'; //Import goal class  
import { GoalService } from '../goal-service/goal.service'; //Imports/register the goal service
import { AlertService } from '../alert-service/alert.service'; //Imports/register the alert service
import { Quote } from '../quote-class/quote'; //Import quote class

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]; //Create a property goals and assign a type - array
  alertService:AlertService; //Property alertService and type is AlertService
  quote:Quote; //Property quote type Quote(from our class)

  /*
  a.) Constructor is used to consume the GoalService and get 
  goals from the Goals array in our makeshift database

  b.) Instantiate and make the alert service available
  */
  constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient) {
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
        //alertMe() method from the service to display the message inside after the user has confirmed to delete a goal.
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }

  ngOnInit(): void {
    //Tell Angular the kind of response we will receive from the API
    interface ApiResponse{
      //Expectations from the API and their types
      author:string;
      quote:string;
    }
    //Makes a request to the API
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.quote = new Quote(data.author, data.quote)}, //Instantiate quote
      //Predefined data incase the no response is received from the API - Error handling in play
      err=>{
        this.quote = new Quote("Winston Churchill","Never never give up!")
        console.log("An error occurred")
    })
    
  }

}
