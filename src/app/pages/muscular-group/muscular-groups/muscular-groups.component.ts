import { Component, OnInit } from '@angular/core';
import { MuscularGroup } from 'src/app/shared/models/MuscularGroup.model';
import { MuscularGroupService } from 'src/app/shared/services/muscular-group.service';

@Component({
  selector: 'app-muscular-groups',
  templateUrl: './muscular-groups.component.html',
  styleUrls: ['./muscular-groups.component.sass'],
})
export class MuscularGroupsComponent implements OnInit {
  muscularGroups: MuscularGroup[] | undefined;
  isSortedByAscendingName: boolean;
  alertIsShown: boolean;

  constructor(private muscularGroupService: MuscularGroupService) {
    this.muscularGroupService
      .getMuscularGroups()
      .subscribe((response: MuscularGroup[]) => {
        this.muscularGroups = response;
      });
    this.isSortedByAscendingName = true;
    this.alertIsShown = false;
  }
  ngOnInit(): void {
    if (window.sessionStorage.getItem('success') == 'muscularGroup')
      this.alertIsShown = true;
    window.setTimeout(() => {
      this.alertIsShown = false;
    }, 3000);
    window.sessionStorage.removeItem("success");
  }

  sortByName() {
    if (this.isSortedByAscendingName) {
      this.sortByDescendingName(this.muscularGroups);
      this.isSortedByAscendingName = false;
    } else {
      this.sortByAscendingName(this.muscularGroups);
      this.isSortedByAscendingName = true;
    }
  }

  sortByAscendingName(muscularGroups: MuscularGroup[] | undefined) {
    muscularGroups?.sort((a, b) => (a.name < b.name ? -1 : 1));
  }

  sortByDescendingName(muscularGroups: MuscularGroup[] | undefined) {
    muscularGroups?.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
}
