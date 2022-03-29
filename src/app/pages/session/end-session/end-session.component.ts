import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateSession } from 'src/app/shared/models/CreateSession.model';
import { SavedExercise } from 'src/app/shared/models/SavedExercise.model';
import { SessionInitialization } from 'src/app/shared/models/SessionInitialization.model';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-end-session',
  templateUrl: './end-session.component.html',
  styleUrls: ['./end-session.component.sass'],
})
export class EndSessionComponent implements OnInit {
  sessionForm: FormGroup;
  sessionInitialization: SessionInitialization | undefined;
  exercises: SavedExercise[];
  sessionDate: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private sessionService: SessionService) {
    this.sessionForm = new FormGroup({});
    this.exercises = [];
    this.sessionDate = '';
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
    if (this.sessionInitialization) {
      this.sessionDate = this.sessionInitialization.date.toString();
    }

    const datasToSend = new CreateSession(
      this.sessionDate,
      this.sessionForm.controls['feeling'].value,
      this.exercises,
      this.sessionInitialization?.name, 
      this.sessionForm.controls['note'].value)

    this.sessionService.createSession(datasToSend).subscribe((response) => {
      console.log(response);
    },
    (error) => {
      if (error.status == 200) this.cancelSession();
      // TODO : implement error case and banners
    });
  }
}
