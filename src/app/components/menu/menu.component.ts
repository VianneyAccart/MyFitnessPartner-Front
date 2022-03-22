import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
@Output() openedMobileMenu: EventEmitter<boolean> = new EventEmitter()

sendCloseMobileMenuInstruction() {
  this.openedMobileMenu.emit(false);
}

}
