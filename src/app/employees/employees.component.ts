import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import {EmployeesService} from "../shared/employees.service";



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employees:Employee[];
  public errorMessage:string;
  constructor(private EmployeesService:EmployeesService){}


  ngOnInit(){
    this.getEmployees()
  }
  getEmployees():void{
    this.EmployeesService.getEmployees()
        .subscribe(
            employees => {this.employees = employees},
            error => this.errorMessage = <any>error
        );
  }
}

