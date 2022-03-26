import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MuscularGroup } from 'src/app/shared/models/MuscularGroup.model';
import { MuscularGroupService } from 'src/app/shared/services/muscular-group.service';

@Component({
  selector: 'app-add-exercise-in-session',
  templateUrl: './add-exercise-in-session.component.html',
  styleUrls: ['./add-exercise-in-session.component.sass'],
})
export class AddExerciseInSessionComponent implements OnInit {
  sessionInitilization: string | null;
  exerciseNumber: string | undefined;

  exerciseForm: FormGroup;
  serieForm: FormGroup;
  exercises: FormArray | undefined;
  series: FormArray | undefined;
  muscularGroups: MuscularGroup[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private muscularGroupService: MuscularGroupService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sessionInitilization = window.localStorage.getItem(
      'sessionInitialization'
    );
    if (this.sessionInitilization)
      this.sessionInitilization = JSON.parse(this.sessionInitilization);
    console.log(this.sessionInitilization);

    this.exerciseForm = new FormGroup({});
    this.serieForm = new FormGroup({});
    this.muscularGroupService
      .getMuscularGroups()
      .subscribe((response: MuscularGroup[]) => {
        this.muscularGroups = response;
      });

    this.route.params.subscribe((param) => {
      this.exerciseNumber = param['number'];
    });
  }

  ngOnInit(): void {
    this.exerciseForm = this.formBuilder.group({
      name: [''],
      muscularGroup: [''],
      series: this.formBuilder.array([this.addSerie()]),
    });
  }

  getSeries() {
    return this.exerciseForm.controls['series'] as FormArray;
  }

  addSerie() {
    const serieForm = this.formBuilder.group({
      repetitions: [''],
      weight: [''],
    });
    this.series = this.exerciseForm?.get('series') as FormArray;
    this.series?.push(serieForm);
  }

  deleteSerie(serieIndex: number) {
    this.series?.removeAt(serieIndex);
  }

  // addSerie(): void {
  //   this.series = this.exerciseForm?.get('series') as FormArray;
  //   this.series.push(this.createSerie());
  // }

  getValuesForEachSerie() {
    console.log(this.exerciseForm.controls['series'] as FormArray)
  }

  setExerciseInLocalStorage() {
    let savedExercise = {
      "muscularGroupId" : this.exerciseForm.controls['muscularGroup'].value,
      "name" : this.exerciseForm.controls['name'].value
    };
    window.localStorage.setItem('savedExercise' + this.exerciseNumber, JSON.stringify(savedExercise));
    if (this.exerciseNumber) {
      this.router.navigate([`/seance/creation/exercice/${parseInt(this.exerciseNumber) + 1}`]);
      this.ngOnInit();
    }
  }
}
