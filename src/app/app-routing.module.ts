import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateExerciseComponent } from './pages/create-exercise/create-exercise.component';
import { CreateMuscularGroupComponent } from './pages/create-muscular-group/create-muscular-group.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { ModifyExerciseComponent } from './pages/modify-exercise/modify-exercise.component';
import { ModifyMuscularGroupComponent } from './pages/modify-muscular-group/modify-muscular-group.component';
import { MuscularGroupsComponent } from './pages/muscular-groups/muscular-groups.component';
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
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
