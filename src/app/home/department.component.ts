import { Component, OnInit } from '@angular/core';
import { Department } from '../shared/department.class';
import { DepartmentService } from "../shared/department.service";

@Component({
  selector: 'app-departments',
  templateUrl: 'department.component.html',
  styleUrls: ['department.component.css'],
})
export class DepartmentComponent implements OnInit {

  public departments:Department[];
  public errorMessage:string;

  constructor(private DepartmentService:DepartmentService){}


  ngOnInit(){
    this.getDepartments();
  }
  getDepartments():void{
    this.DepartmentService.getDepartments()
        .subscribe(
            departments => {this.departments = departments},
            error => this.errorMessage = <any>error
        );
  }

  deleteDepartment(department: Department): void {
    if (confirm('Confirm')) {
      this.DepartmentService
          .deleteDepartment(department.id)
          .subscribe(
              data => {
                this.getDepartments();
                return true;
              },
              error => this.errorMessage = <any>error);
    }
  }

}
