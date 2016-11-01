import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DepartmentService } from '../../shared/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private DepartmentService: DepartmentService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(3)
      ]]
    });
  }

  ngOnInit() {}

  save() {
    var result,
        departmentValue = this.form.value;
      result = this.DepartmentService.createDepartment(departmentValue);

    result.subscribe(data => this.router.navigate(['']));
  }
}
