import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MuscularGroup } from 'src/app/shared/models/MuscularGroup.model';
import { MuscularGroupService } from 'src/app/shared/services/muscular-group.service';

@Component({
  selector: 'app-add-exercise-in-session',
  templateUrl: './add-exercise-in-session.component.html',
  styleUrls: ['./add-exercise-in-session.component.sass'],
})
export class AddExerciseInSessionComponent implements OnInit {
  sessionInitilization: string | null;

  exerciseForm: FormGroup;
  exercises: FormArray | undefined;
  series: FormArray | undefined;
  muscularGroups: MuscularGroup[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private muscularGroupService: MuscularGroupService
  ) {
    this.sessionInitilization = window.localStorage.getItem(
      'sessionInitialization'
    );
    if (this.sessionInitilization)
      this.sessionInitilization = JSON.parse(this.sessionInitilization);
    console.log(this.sessionInitilization);

    this.exerciseForm = new FormGroup({});
    this.muscularGroupService
      .getMuscularGroups()
      .subscribe((response: MuscularGroup[]) => {
        this.muscularGroups = response;
      });
  }

  ngOnInit(): void {
    this.exerciseForm = this.formBuilder.group({
      name: [''],
      muscularGroup: [''],
      series: this.formBuilder.array([this.createSerie()]),
    });
  }

  createSerie(): FormGroup {
    return this.formBuilder.group({
      repetitions: [''],
      weight: [''],
    });
  }

  addSerie(): void {
    this.series = this.exerciseForm?.get('series') as FormArray;
    this.series.push(this.createSerie());
  }
}
