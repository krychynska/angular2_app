import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { DepartmentsModule } from './departments/department.module';
import { routing } from './app.routing';

import { EmployeesComponent} from './employees/employees.component';
import { EmployeesService } from './shared/employees.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    DepartmentsModule,
    routing
  ],
  providers: [
    HttpModule,
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
