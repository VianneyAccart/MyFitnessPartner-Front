import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  openedMobileMenu: boolean;

  constructor() {
    this.openedMobileMenu = false;
  }

  toggleMobileMenu(): void {
    this.openedMobileMenu = !this.openedMobileMenu;
  }

  closeMobileMenu(event: boolean) {
    this.openedMobileMenu = event;
  }
}
