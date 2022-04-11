import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alertMe(message:string){
    alert(message)
  }

  constructor() { }
}
