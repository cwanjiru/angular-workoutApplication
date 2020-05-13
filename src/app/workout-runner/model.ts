export class WorkoutPlan {
  constructor(
    public name: string,
    public title: string,
    public restBetweenExercise: number,
    public exercises: ExercisePlan[],
    public description?: string
  ) {}

  totalWorkoutDuration = (): number => {
    if (this.exercises) {
      return 0;
    }

    const durations=this.exercises.map(function(exercise){
        return exercise.duration
    })
    const total=durations.reduce(function(acc,duration){
        return acc+duration
    })

    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length-1) + total;
    

  };
}

export class ExercisePlan {
  constructor(public exercise: Exercise, public duration: number) {}
}

export class Exercise {
  constructor(
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public nameSound?: string,
    public procedures?: string,
    public videos?: Array<string>
  ) {}
}
