import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { ExerciseDescriptionComponent } from './exercise-description/exercise-description.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SecondsToTimePipe } from '../shared/seconds-to-time.pipe';


@NgModule({
  declarations: [WorkoutRunnerComponent, ExerciseDescriptionComponent, VideoPlayerComponent,SecondsToTimePipe],
  imports: [
    CommonModule
  ],
  exports: [
    WorkoutRunnerComponent
  ]
})
export class WorkoutRunnerModule { }
