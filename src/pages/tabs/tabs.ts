import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import {WorkoutPage} from "../workout/workout";
import {Addworkout} from "../addworkout/addworkout";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  aboutRoot: any = AboutPage;
  tab3Root: any = ContactPage;
  workoutsRoot:any = WorkoutPage;
  addWorkout:any = Addworkout;

  constructor() {

  }
}
