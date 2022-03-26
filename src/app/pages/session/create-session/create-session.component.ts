import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MuscularGroup } from 'src/app/shared/models/MuscularGroup.model';
import { MuscularGroupService } from 'src/app/shared/services/muscular-group.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.sass'],
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;
  exerciseForm: FormGroup;
  exercises: FormArray | undefined;
  series: FormArray | undefined;
  muscularGroups: MuscularGroup[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private muscularGroupService: MuscularGroupService,
    private router: Router
  ) {
    this.sessionForm = new FormGroup({});
    this.exerciseForm = new FormGroup({});
    this.muscularGroupService
      .getMuscularGroups()
      .subscribe((response: MuscularGroup[]) => {
        this.muscularGroups = response;
      });
  }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      title: [''],
      date: [''],
      place: [''],
      exercises: this.formBuilder.array([this.createExercise()]),
    });
  }

  setSessionInitializationParametersInLocalStorage() {
    let sessionInitialization = {
      "title" : this.sessionForm.controls['title'].value,
      "date" : this.sessionForm.controls['date'].value,
      "place" : this.sessionForm.controls['place'].value
    };
    window.localStorage.setItem('sessionInitialization', JSON.stringify(sessionInitialization));
    this.router.navigate(['/seance/creation/exercice/1']);
  }

  createExercise(): FormGroup {
    this.exerciseForm = this.formBuilder.group({
      name: [''],
      muscularGroup: [''],
      series: this.formBuilder.array([this.createSerie()])
    });
    return this.exerciseForm;
  }

  createSerie(): FormGroup {
    return this.formBuilder.group({
      repetitions: [''],
      weight: [''],
    });
  }

  addExercise(): void {
    this.exercises = this.sessionForm?.get('exercises') as FormArray;
    this.exercises.push(this.createExercise());
  }

  addSerie(index: number): void {
    
    this.series = this.exerciseForm?.get('series') as FormArray;
    // this.series = this.sessionForm?.get(`exercises.${index}`)?.value.series as FormArray;
    // console.log(this.series)
    this.series.push(this.createSerie());
 
    // this.sessionForm.value.exercises[index].series.push(this.createSerie());
  }

  showExercises() {
    console.log(this.sessionForm.value);
  }
}
