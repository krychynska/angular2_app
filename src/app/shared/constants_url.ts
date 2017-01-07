export const baseUrl:string = 'localhost:4200';

//CRUD Action which entity
export const getDepartmentsUrl:string = baseUrl + 'departments'; //get department
export const postDepartmentsUrl:string = baseUrl + 'departments'; // add new department
export const delDepartmentUrl:string = baseUrl + 'departments'; // + id of department, delete department

export const getEmployeesUrl:string = baseUrl + 'employees';  // get employees
export const getGroupUrl:string = baseUrl+'employees/count'; // + id of department? counts employees
