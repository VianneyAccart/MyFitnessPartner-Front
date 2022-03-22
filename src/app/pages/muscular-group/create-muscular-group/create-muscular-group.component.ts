import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MuscularGroupService } from 'src/app/shared/services/muscular-group.service';

@Component({
  selector: 'app-create-muscular-group',
  templateUrl: './create-muscular-group.component.html',
  styleUrls: ['./create-muscular-group.component.sass'],
})
export class CreateMuscularGroupComponent {
  addMuscularGroupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private muscularGroupService: MuscularGroupService,
    private router: Router
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

  createMuscularGroup(): void {
    const datasToSend: FormData = new FormData();
    datasToSend.append(
      'name',
      this.addMuscularGroupForm.controls['name'].value
    );
    this.muscularGroupService.createMuscularGroup(datasToSend).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        window.sessionStorage.setItem("success", "muscularGroup");
        if (error.status == 200) this.router.navigate(['/groupes-musculaires']);
      }
    );
  }
}
