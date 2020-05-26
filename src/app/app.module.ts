import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutRunnerModule } from './workout-runner/workout-runner.module';
import { SecondsToTimePipe } from './shared/seconds-to-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SecondsToTimePipe
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
