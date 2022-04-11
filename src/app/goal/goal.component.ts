import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service'; //Imports/register the goal service
import { AlertService } from '../alert-service/alert.service'; //Imports/register the alert service

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[]; //Create a property goals and assign a type - array
  alertService:AlertService; //Property alertService and type is AlertService

  /*
  a.) Constructor is used to consume the GoalService and get 
  goals from the Goals array in our makeshift database

  b.) Instantiate and make the alert service available
  */
  constructor(goalService:GoalService, alertService:AlertService) {
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
  }

}
