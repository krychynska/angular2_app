export const baseUrl:string = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/';

//CRUD Action which entity
export const getDepartmentsUrl:string = baseUrl + 'departments'; //get department
export const postDepartmentsUrl:string = baseUrl + 'departments'; // add new department
export const delDepartmentUrl:string = baseUrl + 'departments'; // + id of department, delete department

export const getEmployeesUrl:string = baseUrl + 'employees';  // get employees
export const getGroupUrl:string = baseUrl+'count'; // + id of department? counts employees