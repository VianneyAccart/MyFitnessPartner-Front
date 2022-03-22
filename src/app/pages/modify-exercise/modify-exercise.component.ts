import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MuscularGroup } from 'src/app/shared/models/MuscularGroup.model';
import { ExercisesService } from 'src/app/shared/services/exercises.service';
import { MuscularGroupService } from 'src/app/shared/services/muscular-group.service';

@Component({
  selector: 'app-modify-exercise',
  templateUrl: './modify-exercise.component.html',
  styleUrls: ['./modify-exercise.component.sass'],
})
export class ModifyExerciseComponent implements OnInit {
  addExerciseForm: FormGroup;
  muscularGroups: MuscularGroup[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private exercisesService: ExercisesService,
    private muscularGroupService: MuscularGroupService,
    private router: Router,
    private route: ActivatedRoute
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

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.exercisesService
        .getExerciseById(params['id'])
        .subscribe((response) => {
          this.addExerciseForm = this.formBuilder.group({
            muscularGroup: [response.muscularGroup.id, Validators.required],
            name: [
              response.name,
              [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(100),
              ],
            ],
            description: [
              response.description,
              [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(1500),
              ],
            ],
          });
        });
    });
  }

  modifyExercise(): void {
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

    this.route.params.subscribe((params) => {
      this.exercisesService.modifyExercise(params['id'], datasToSend).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          window.sessionStorage.setItem("success", "exercise");
          if (error.status == 200) this.router.navigate(['/exercices']);
        }
      );
    });
  }

  deleteExerciseById(): void {
    this.route.params.subscribe((params) => {
      this.exercisesService.deleteExercise(params['id']).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          window.sessionStorage.setItem("success", "exercise");
          if (error.status == 200) this.router.navigate(['/exercices']);
        }
      );
    });
  }
}
