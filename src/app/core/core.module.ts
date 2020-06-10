import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutHistoryTrackerService } from './workout-history-tracker.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    WorkoutHistoryTrackerService
  ]
})
export class CoreModule { }
