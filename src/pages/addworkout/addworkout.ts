import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WorkoutService} from "../../providers/workout";
import {WorkoutPage} from "../workout/workout";

/*
  Generated class for the Addworkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addworkout',
  templateUrl: 'addworkout.html'
})
export class Addworkout {
  title:string;
  type:string;
  note:string;

  workoutForm:FormGroup;
  result:any;



  constructor(public navCtrl: NavController ,
              private fb:FormBuilder ,
              private wrkoutSrv:WorkoutService) {
    this.workoutForm = fb.group({
      "title": ["",Validators.required],
      "note": ["",Validators.required],
      "type": ["",Validators.required]
    });

  }

  ionViewDidLoad() {
    console.log('Hello Addworkout Page');
  }


  onSubmit(){
    this.title  = this.workoutForm.value.title;
    this.note = this.workoutForm.value.note;
    this.type = this.workoutForm.value.type;
    var workout ={
      title: this.title,
      note: this.note,
      type: this.type
    }

    this.wrkoutSrv.storeWorkout(workout)
      .subscribe(data => {
        this.result = data;
      },
      err => {
        console.log(err);
      },() => console.log('workout added'));

    this.navCtrl.setRoot(WorkoutPage);

  }

}
