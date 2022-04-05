import { Component } from '@angular/core';
import { Goal } from './goal'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:Goal[] = [
    {id:1, name:'Watch finding Nemo'},
    {id:2, name:'Teach a class'},
    {id:3, name:'Make some food'},
    {id:4, name:'Study Angular'}
  ];
}
