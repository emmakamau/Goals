import { Injectable } from '@angular/core';
import { Goals } from '../goalList'; //Import Goals array from the service created

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals(){
    return Goals //GoalService is able to access our goals list.
  }

  constructor() { }
}
