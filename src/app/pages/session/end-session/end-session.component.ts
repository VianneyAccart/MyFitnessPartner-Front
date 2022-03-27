import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-session',
  templateUrl: './end-session.component.html',
  styleUrls: ['./end-session.component.sass']
})
export class EndSessionComponent implements OnInit {

  sessionForm: FormGroup;
  series: FormArray | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.sessionForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      title: [''],
      date: ['', Validators.required],
    });
  }

  setSessionInitializationParametersInLocalStorage() {
    let sessionInitialization = {
      title: this.sessionForm.controls['title'].value,
      date: this.sessionForm.controls['date'].value,
    };
    window.localStorage.setItem(
      'sessionInitialization',
      JSON.stringify(sessionInitialization)
    );
    this.router.navigate(['/seance/creation/exercice/1']);
  }
}
