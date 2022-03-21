import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MuscularGroup } from 'src/app/shared/models/MuscularGroup.model';
import { ExercisesService } from 'src/app/shared/services/exercises.service';
import { MuscularGroupService } from 'src/app/shared/services/muscular-group.service';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrls: ['./create-exercise.component.sass'],
})
export class CreateExerciseComponent {
  addExerciseForm: FormGroup;
  muscularGroups: MuscularGroup[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private exercisesService: ExercisesService,
    private muscularGroupService: MuscularGroupService,
    private router: Router
  ) {
    this.muscularGroupService
      .getMuscularGroups()
      .subscribe((response: MuscularGroup[]) => {
        this.muscularGroups = response;
      });
    this.addExerciseForm = this.formBuilder.group({
      muscularGroup: ['', Validators.required],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1500),
        ],
      ],
    });
  }

  onSubmit(): void {
    const datasToSend: FormData = new FormData();
    datasToSend.append(
      'muscularGroupId',
      this.addExerciseForm.controls['muscularGroup'].value
    );
    datasToSend.append('name', this.addExerciseForm.controls['name'].value);
    datasToSend.append(
      'description',
      this.addExerciseForm.controls['description'].value
    );

    this.exercisesService.createExercise(datasToSend).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        if (error.status == 200) this.router.navigate(['/']);
      }
    );
  }
}
