import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExerciseComponent } from './pages/exercise/create-exercise/create-exercise.component';
import { CreateMuscularGroupComponent } from './pages/muscular-group/create-muscular-group/create-muscular-group.component';
import { ExercisesComponent } from './pages/exercise/exercises/exercises.component';
import { ModifyExerciseComponent } from './pages/exercise/modify-exercise/modify-exercise.component';
import { ModifyMuscularGroupComponent } from './pages/muscular-group/modify-muscular-group/modify-muscular-group.component';
import { MuscularGroupsComponent } from './pages/muscular-group/muscular-groups/muscular-groups.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateSessionComponent } from './pages/session/create-session/create-session.component';
import { AddExerciseInSessionComponent } from './pages/session/add-exercise-in-session/add-exercise-in-session.component';
import { EndSessionComponent } from './pages/session/end-session/end-session.component';

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
    path:'groupes-musculaires',
    component: MuscularGroupsComponent
  },
  {
    path: 'groupe-musculaire/creation',
    component: CreateMuscularGroupComponent
  },
  {
    path: 'groupe-musculaire/:id/modification',
    component: ModifyMuscularGroupComponent,
  },
  {
    path: 'seance/creation',
    component: CreateSessionComponent
  },
  {
    path: 'seance/creation/exercice/:number',
    component: AddExerciseInSessionComponent
  },
  {
    path: 'seance/creation/finalisation',
    component: EndSessionComponent
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
