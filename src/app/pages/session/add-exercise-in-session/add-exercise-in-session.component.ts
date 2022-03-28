import { Component, DoCheck, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from 'src/app/shared/models/Exercise.model';
import { MuscularGroup } from 'src/app/shared/models/MuscularGroup.model';
import { ExercisesService } from 'src/app/shared/services/exercises.service';
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
  serieForm: FormGroup;
  exercisesByMuscularGroup: Exercise[] | undefined;
  isExerciseSelected: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private muscularGroupService: MuscularGroupService,
    private exerciseService: ExercisesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isExerciseSelected = false;
    this.sessionInitilization = window.localStorage.getItem(
      'sessionInitialization'
    );
    if (this.sessionInitilization)
      this.sessionInitilization = JSON.parse(this.sessionInitilization);

    this.exerciseForm = new FormGroup({});
    this.muscularGroupService
      .getMuscularGroups()
      .subscribe((response: MuscularGroup[]) => {
        this.muscularGroups = response;
      });

    this.route.params.subscribe((param) => {
      this.exerciseNumber = param['number'];
    });

    this.serieForm = this.formBuilder.group({
      repetitions: ['', [Validators.required, Validators.min(1)]],
      weight: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.exerciseForm = this.formBuilder.group({
      name: ['', Validators.required],
      muscularGroup: ['', Validators.required],
      series: this.formBuilder.array([this.serieForm], Validators.required),
    });
  }

  onExerciseSelection(event: any) {
    if(event.target.value) this.isExerciseSelected = true;
  }

  onMuscularGroupSelection(event: any): void {
      this.getExercisesByMuscularGroupId(event.target.value);
  }

  getExercisesByMuscularGroupId(id: number) {
    this.exerciseService.getExercisesByMuscularGroupId(id).subscribe((response) => {
      this.exercisesByMuscularGroup = response;
    })
  }

  get seriesArray() {
    return this.exerciseForm.get('series') as FormArray;
  }

  addSerie(): void {
    const serieForm = this.formBuilder.group({
      repetitions: ['', [Validators.required, Validators.min(1)]],
      weight: ['', [Validators.required, Validators.min(0)]],
    });
    this.series = this.seriesArray;
    this.series.push(serieForm);
  }

  deleteSerie(serieIndex: number) {
    this.series?.removeAt(serieIndex);
  }

  endSession() {
    let savedExercise = {
      muscularGroupId: this.exerciseForm.controls['muscularGroup'].value,
      name: this.exerciseForm.controls['name'].value,
      series: this.exerciseForm.controls['series'].value,
    };
    window.localStorage.setItem(
      'exercise ' + this.exerciseNumber,
      JSON.stringify(savedExercise)
    );
    this.router.navigate(['/seance/creation/finalisation']);
  }

  setExerciseInLocalStorage() {
    let savedExercise = {
      muscularGroupId: this.exerciseForm.controls['muscularGroup'].value,
      nameId: this.exerciseForm.controls['name'].value,
      series: this.exerciseForm.controls['series'].value,
    };
    window.localStorage.setItem(
      'exercise ' + this.exerciseNumber,
      JSON.stringify(savedExercise)
    );
    if (this.exerciseNumber) {
      this.router.navigate([
        `/seance/creation/exercice/${parseInt(this.exerciseNumber) + 1}`,
      ]);
      this.exerciseForm.reset()
      this.isExerciseSelected = false;
      this.exercisesByMuscularGroup = [];
      this.ngOnInit();
    }
  }

  cancelSession() {
    if (window.localStorage.getItem('sessionInitialization'))
      window.localStorage.removeItem('sessionInitialization');

    Object.keys(localStorage).forEach(function(key){
      if (key.includes('exercise')) localStorage.removeItem(key);
    });
    this.router.navigate(['/exercices']);
  }
}
