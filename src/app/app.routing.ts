import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { DepartmentComponent } from './departments/department.component';
import { DepartmentFormComponent } from './departments/department-form/department-form.component'
import { EmployeesComponent } from './employees/employees.component';

const appRoutes: Routes = [
  { path: '', component: DepartmentComponent},
  { path: 'new', component: DepartmentFormComponent },
  { path: 'employees', component: EmployeesComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
