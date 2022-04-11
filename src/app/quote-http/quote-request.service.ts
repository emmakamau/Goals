import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  quote: Quote;

  constructor(private http:HttpClient) {
    this.quote = new Quote("","");
   }

   quoteRequest(){
      //Tell Angular the kind of response we will receive from the API
     interface ApiResponse{
       //Expectations from the API and their types
       quote:string;
       author:string;
     }
     let promise = new Promise<void>((resolve,reject)=>{
       //Makes a request to the API
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.quote.quote = response.quote
         this.quote.author = response.author
         resolve()
       },//Predefined data incase the no response is received from the API - Error handling in play
       error=>{
         this.quote.quote = "Never, never, never give up"
         this.quote.author = "Winston Churchill"

         reject(error)
       })
     })
     return promise
   }

}
