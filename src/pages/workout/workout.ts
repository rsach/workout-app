import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WorkoutService} from "../../providers/workout";
import {WorkoutDetail} from "../workout-detail/workout-detail";

/*
  Generated class for the Workout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout',
  templateUrl: 'workout.html'
})
export class WorkoutPage implements OnInit{
  workouts:any[];
  constructor(public navCtrl: NavController ,
              private navParams:NavParams,
              private wrkoutSrv:WorkoutService) {}

  ionViewDidLoad() {


  }

  ngOnInit(){
    this.wrkoutSrv.getWorkouts()
      .subscribe(workouts =>{
        this.workouts = workouts
      });

  }


  workoutSelected(event,workout){
    this.navCtrl.push(WorkoutDetail,{
      workout:workout
    });

  }

}
