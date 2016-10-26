import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Department } from '../../shared/department.class';
import { DepartmentService } from '../../shared/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(''),
  });
  onSubmit(): void {
    console.log(this.form.value);
  }
  setValue() { this.form.setValue({name: '', description: ''}); }

  title: string;
  department: Department = new Department();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private DepartmentService: DepartmentService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required
      ]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      if (!id)
        return;

      this.DepartmentService.getDepartment(id)
        .subscribe(
            department => this.department = department,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        departmentValue = this.form.value;
      result = this.DepartmentService.createDepartment(departmentValue);

    result.subscribe(data => this.router.navigate(['']));
  }
}
