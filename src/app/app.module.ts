import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { CreateExerciseComponent } from './pages/create-exercise/create-exercise.component';
import { ModifyExerciseComponent } from './pages/modify-exercise/modify-exercise.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExercisesComponent,
    CreateExerciseComponent,
    ModifyExerciseComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
