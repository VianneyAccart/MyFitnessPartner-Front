import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SavedExercise } from 'src/app/shared/models/SavedExercise.model';
import { SessionInitialization } from 'src/app/shared/models/SessionInitialization.model';

@Component({
  selector: 'app-end-session',
  templateUrl: './end-session.component.html',
  styleUrls: ['./end-session.component.sass'],
})
export class EndSessionComponent implements OnInit {
  sessionForm: FormGroup;
  sessionInitialization: SessionInitialization | undefined;
  exercises: SavedExercise[];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.sessionForm = new FormGroup({});
    this.exercises = [];
  }

  ngOnInit(): void {
    this.sessionInitialization = JSON.parse(
      window.localStorage.getItem('sessionInitialization')!
    );

    Object.keys(localStorage).forEach((key) => {
      if (key.includes('exercise')) {
        this.exercises.push(JSON.parse(localStorage.getItem(key)!));
      }
    });

    this.sessionForm = this.formBuilder.group({
      feeling: ['', Validators.required],
      note: [''],
    });
  }

  cancelSession() {
    if (window.localStorage.getItem('sessionInitialization'))
      window.localStorage.removeItem('sessionInitialization');

    Object.keys(localStorage).forEach(function (key) {
      if (key.includes('exercise')) localStorage.removeItem(key);
    });
    this.router.navigate(['/exercices']);
  }

  saveSession() {
    const session = new FormData();
    if (this.sessionInitialization?.title) {
      session.append('title', this.sessionInitialization.title);
    }
    if (this.sessionForm.controls['note'].value !== '') {
      session.append('note', this.sessionForm.controls['note'].value);
    }
    if (this.sessionInitialization?.date) {
      session.append('date', this.sessionInitialization.date.toString());
    }
    session.append('feeling', this.sessionForm.controls['feeling'].value);
    this.exercises.forEach((exercise) => {
      session.append('exercise', JSON.stringify(exercise));
    });
    // TODO : implement save method
  }
}
