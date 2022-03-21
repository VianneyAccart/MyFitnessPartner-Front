import { Component, Input } from '@angular/core';
import { Exercise } from 'src/app/shared/models/Exercise.model';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.sass'],
})
export class ExerciseCardComponent {
  @Input() exercises: Exercise[] | undefined;
}
