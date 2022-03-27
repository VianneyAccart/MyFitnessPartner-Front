import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateExerciseComponent } from './pages/exercise/create-exercise/create-exercise.component';
import { ModifyExerciseComponent } from './pages/exercise/modify-exercise/modify-exercise.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ExercisesComponent } from './pages/exercise/exercises/exercises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MuscularGroupsComponent } from './pages/muscular-group/muscular-groups/muscular-groups.component';
import { CreateMuscularGroupComponent } from './pages/muscular-group/create-muscular-group/create-muscular-group.component';
import { ModifyMuscularGroupComponent } from './pages/muscular-group/modify-muscular-group/modify-muscular-group.component';
import { CreateSessionComponent } from './pages/session/create-session/create-session.component';
import { AddExerciseInSessionComponent } from './pages/session/add-exercise-in-session/add-exercise-in-session.component';
import { EndSessionComponent } from './pages/session/end-session/end-session.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExercisesComponent,
    CreateExerciseComponent,
    ModifyExerciseComponent,
    NotFoundComponent,
    MenuComponent,
    MuscularGroupsComponent,
    CreateMuscularGroupComponent,
    ModifyMuscularGroupComponent,
    CreateSessionComponent,
    AddExerciseInSessionComponent,
    EndSessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
