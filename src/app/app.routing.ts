import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { DepartmentComponent } from './home/department.component';
import { DepartmentFormComponent } from './home/department-form/department-form.component'
import { EmployeesComponent } from './employees/employees.component';

const appRoutes: Routes = [
  { path: '', component: DepartmentComponent},
  { path: 'new', component: DepartmentFormComponent },
  { path: 'employees', component: EmployeesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
