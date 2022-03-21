import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/models/Exercise.model';
import { ExercisesService } from 'src/app/shared/services/exercises.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.sass']
})
export class ExercisesComponent implements OnInit {

  exercises: Exercise[] | undefined;

  constructor(private exercisesService: ExercisesService) { 
    this.exercisesService.getExercises().subscribe((response: Exercise[]) => {
      this.exercises = response;
    })
  }

  ngOnInit(): void {
  }

}
