import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";


/*
  Generated class for the Workout provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WorkoutService {
  private apiKey:string;
  private serviceUrl:string;


  constructor(public http: Http) {
    this.apiKey = '1x2C51Q11I9RxlJE3lvqzfWfiaxinfp0';
    this.serviceUrl = 'https://api.mlab.com/api/1/databases/workout/collections/workouts?apiKey=';

  }

  getWorkouts(){

    return this.http.get(this.serviceUrl+this.apiKey)
      .map(res => res.json());
  }

  storeWorkout(workout){
    var headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post(this.serviceUrl+this.apiKey,JSON.stringify(workout),{headers:headers})
      .map(res => res.json());
  }

  deleteWorkout(workoutId){
    return this.http.delete('https://api.mlab.com/api/1/databases/workout/collections/workouts/'+workoutId+'?apiKey='+this.apiKey)
      .map(res => res.json());
  }




}
