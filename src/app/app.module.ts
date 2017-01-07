import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {WorkoutPage} from "../pages/workout/workout";
import {Addworkout} from "../pages/addworkout/addworkout";
import {WorkoutService} from "../providers/workout";
import {WorkoutDetail} from "../pages/workout-detail/workout-detail";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkoutPage,
    Addworkout,
    WorkoutDetail

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkoutPage,
    Addworkout,
    WorkoutDetail

  ],
  providers: [WorkoutService]
})
export class AppModule {}
