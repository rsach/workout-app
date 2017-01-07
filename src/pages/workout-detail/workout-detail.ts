import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WorkoutService} from "../../providers/workout";
import {WorkoutPage} from "../workout/workout";

/*
  Generated class for the WorkoutDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html'
})
export class WorkoutDetail {
  workout:any;
  result:any;

  constructor(public navCtrl: NavController,
              public navParams:NavParams  ,
              private wrkoutSrv:WorkoutService) {
    this.workout = this.navParams.get('workout');

  }

  ionViewDidLoad() {
    console.log('Hello WorkoutDetail Page');
  }


  onDelete(workout){
    console.log(workout._id.$oid);

    this.wrkoutSrv.deleteWorkout(workout._id.$oid)
      .subscribe(data => {
          this.result = data;
        },
        err => {
          console.log(err);
        },() => console.log('workout deleted'));

    this.navCtrl.setRoot(WorkoutPage);
  }

}
