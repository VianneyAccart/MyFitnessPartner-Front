import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
@Output() openedMobileMenu: EventEmitter<boolean> = new EventEmitter()

exercisesOptionsAreShown: boolean;
muscularGroupOptionsAreShown: boolean;
accountOptionsAreShown: boolean;

constructor() {
  this.exercisesOptionsAreShown = false;
  this.muscularGroupOptionsAreShown = false
  this.accountOptionsAreShown = false;
}

sendCloseMobileMenuInstruction() {
  this.openedMobileMenu.emit(false);
}

showExercisesOptions() {
  this.exercisesOptionsAreShown = !this.exercisesOptionsAreShown;
}

showMuscularGroupOptions() {
  this.muscularGroupOptionsAreShown = !this.muscularGroupOptionsAreShown;
}

showAccountOptions() {
  this.accountOptionsAreShown = !this.accountOptionsAreShown;
}

}
