import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    {id:1, name:'Watch finding Nemo',description:'We can now add descriptions to our goals in the array'},
    {id:2, name:'Teach a class',description:'We can now add descriptions to our goals in the array'},
    {id:3, name:'Make some food',description:'We can now add descriptions to our goals in the array'},
    {id:4, name:'Study Angular',description:'We can now add descriptions to our goals in the array'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
