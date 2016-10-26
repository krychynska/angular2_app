import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs';


import {Department} from './department.class';
import *as url from './constants_url'

@Injectable()
export class DepartmentService{

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }


    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }

    public getDepartments(): Observable<Department[]> {
        return this.http
            .get(url.getDepartmentsUrl)
            .map((res: Response) => res.json())
            .do((response) => {
                console.log(JSON.stringify(response));
            })
            .catch(this.handleError);
    }
    public getDepartment(id: number): Observable<Department[]> {
        return this.http
            .get(`${url.getDepartmentsUrl}/${id}`, {headers: this.headers})
            .map((res: Response) => res.json())
            .do((response) => {
                console.log(JSON.stringify(response));
            })
            .catch(this.handleError);
    }
    public deleteDepartment(id: number): Observable<any> {
        return this.http.delete(`${url.delDepartmentUrl}/${id}`, {headers: this.headers})
            .catch(this.handleError);
    }

    public createDepartment(department): Observable<Department[]> {
        return this.http.post(`${url.postDepartmentsUrl}`, JSON.stringify(department), {headers: this.headers})
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

}
