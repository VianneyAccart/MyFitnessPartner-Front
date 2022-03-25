import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.sass'],
})
export class CreateSessionComponent implements OnInit {
  sessionForm: FormGroup;
  exercises: FormArray | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.sessionForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      title: [''],
      date: [''],
      feeling: [''],
      exercises: this.formBuilder.array([this.createExercise()]),
    });
  }

  createExercise(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      muscularGroup: ['']
    });
  }

  addExercise(): void {
    this.exercises = this.sessionForm?.get('exercises') as FormArray;
    this.exercises.push(this.createExercise());
  }
}
