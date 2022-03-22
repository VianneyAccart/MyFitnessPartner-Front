import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MuscularGroupService } from 'src/app/shared/services/muscular-group.service';

@Component({
  selector: 'app-modify-muscular-group',
  templateUrl: './modify-muscular-group.component.html',
  styleUrls: ['./modify-muscular-group.component.sass'],
})
export class ModifyMuscularGroupComponent implements OnInit {
  addMuscularGroupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private muscularGroupService: MuscularGroupService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.addMuscularGroupForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(150),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.muscularGroupService
        .getMuscularGroupById(params['id'])
        .subscribe((response) => {
          this.addMuscularGroupForm = this.formBuilder.group({
            name: [
              response.name,
              [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(150),
              ],
            ]
          });
        });
    });
  }

  modifyMuscularGroup(): void {
    const datasToSend: FormData = new FormData();
    datasToSend.append(
      'name',
      this.addMuscularGroupForm.controls['name'].value
    );

    this.route.params.subscribe((params) => {
      this.muscularGroupService.modifyMuscularGroup(params['id'], datasToSend).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          window.sessionStorage.setItem("success", "muscularGroup");
          if (error.status == 200) this.router.navigate(['/groupes-musculaires']);
        }
      );
    });
  }

  deleteMuscularGroupById(): void {
    this.route.params.subscribe((params) => {
      this.muscularGroupService.deleteMuscularGroup(params['id']).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          window.sessionStorage.setItem("success", "muscularGroup");
          if (error.status == 200) this.router.navigate(['/groupes-musculaires']);
        }
      );
    });
  }
}
