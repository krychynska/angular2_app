import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { DepartmentComponent } from './department.component';
import { DepartmentService } from '../shared/department.service';
import { DepartmentFormComponent } from '../departments/department-form/department-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        DepartmentComponent,
        DepartmentFormComponent
    ],
    exports: [
        DepartmentComponent
    ],
    providers: [
        DepartmentService
    ]
})
export class DepartmentsModule { }
