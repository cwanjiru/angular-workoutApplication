import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { StartComponent } from './start/start.component';
import { FinishComponent } from './finish/finish.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FinishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkoutRunnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
