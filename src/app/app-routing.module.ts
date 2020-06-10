import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutRunnerComponent } from './workout-runner/workout-runner.component';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
  {path: 'start', component: StartComponent },
  {path: 'finish', component: FinishComponent},
  {path: 'workout', component:WorkoutRunnerComponent},
  // {path: '**', redirectTo: '/start'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
