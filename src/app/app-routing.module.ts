import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExerciseComponent } from './pages/create-exercise/create-exercise.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { ModifyExerciseComponent } from './pages/modify-exercise/modify-exercise.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/exercices',
    pathMatch: 'full'
  },
  {
    path: 'exercices',
    component: ExercisesComponent,
  },
  {
    path: 'exercice/creation',
    component: CreateExerciseComponent,
  },
  {
    path: 'exercice/:id/modification',
    component: ModifyExerciseComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
