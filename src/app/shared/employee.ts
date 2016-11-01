export class Employee {
    id?: number;
    firstName?: string;
    lastName?: string;
    phone?: number;
    salary?: number;
    departmentName?: string;

constructor(firstName:string, lastName: string, phone: number, salary: number, departmentName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
    this.departmentName = departmentName;
}
}