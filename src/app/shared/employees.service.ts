import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs';


import { Employee } from '../shared/employee';
import *as url from './constants_url'

@Injectable()
export class EmployeesService {

    private headers = new Headers({'Content-Type': 'application/json'});
    constructor( private http:Http){}


    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    public getEmployees(): Observable<Employee[]>{
        return this.http
            .get(url.getEmployeesUrl)
            .map((res: Response) => res.json())
            .do((response) => {console.log(JSON.stringify(response));})
            .catch(this.handleError);
    }

}
