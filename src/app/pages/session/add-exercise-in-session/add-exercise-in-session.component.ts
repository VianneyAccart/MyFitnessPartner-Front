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
  series: FormArray | undefined;
  muscularGroups: MuscularGroup[] | undefined;
  exerciseForm: FormGroup;

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
    this.muscularGroupService
      .getMuscularGroups()
      .subscribe((response: MuscularGroup[]) => {
        this.muscularGroups = response;
      });

    this.route.params.subscribe((param) => {
      this.exerciseNumber = param['number'];
    });
  }

  ngOnInit() {
    this.exerciseForm = this.formBuilder.group({
      name: [''],
      muscularGroup: [''],
      series: this.formBuilder.array([]),
    });
  }

  get seriesArray() {
    return this.exerciseForm.get('series') as FormArray;
  }

  addSerie(): void {
    const serieForm = this.formBuilder.group({
      repetitions: [''],
      weight: [''],
    });
    this.series = this.seriesArray;
    this.series.push(serieForm);
  }

  deleteSerie(serieIndex: number) {
    this.series?.removeAt(serieIndex);
  }

  getValuesForEachSerie() {
    let savedExercise = {
      muscularGroupId: this.exerciseForm.controls['muscularGroup'].value,
      name: this.exerciseForm.controls['name'].value,
      series: this.exerciseForm.controls['series'].value,
    };
    console.log(savedExercise);
  }

  setExerciseInLocalStorage() {
    let savedExercise = {
      muscularGroupId: this.exerciseForm.controls['muscularGroup'].value,
      name: this.exerciseForm.controls['name'].value,
      series: this.exerciseForm.controls['series'].value,
    };
    window.localStorage.setItem(
      'savedExercise' + this.exerciseNumber,
      JSON.stringify(savedExercise)
    );
    if (this.exerciseNumber) {
      this.router.navigate([
        `/seance/creation/exercice/${parseInt(this.exerciseNumber) + 1}`,
      ]);
      this.ngOnInit();
    }
  }
}
