//problem 1
//Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
//Sam, Tech, Manager, 40000, true
//Mary, Finance, Trainee, 18500, true
//Bill, HR, Executive, 21200, false

let company_employees = 
'{ "employees" : [' +
'{ "first_name":"sam" , "department":"tech" , "designation":"manager" , "salary":"40000" , "raise_eligible":"true"},' +
'{ "first_name":"mary" , "department":"finance" , "designation":"trainee" , "salary":"18500" , "raise_eligible":"true"},' +
'{ "first_name":"bill" , "department":"hr" , "designation":"executive" , "salary":"21200" , "raise_eligible":"false"},' +
'{ "first_name":"anna" , "department":"tech" , "designation":"executive" , "salary":"25600" , "raise_eligible":"false"}]}';

let company_data = JSON.parse(company_employees);

let first_employee = company_data.employees[0];
let second_employee = company_data.employees[1];
let third_employee = company_data.employees[2];    

console.log("problem 1:\n");
console.log("employee 1:\n");
console.log("first name: " + first_employee.first_name + ", department: " + first_employee.department + ", designation: " + first_employee.designation + ", salary: " + first_employee.salary , ", raise eligible: " + first_employee.raise_eligible);
console.log("employee 2:\n");
console.log("first name: " + second_employee.first_name + ", department: " + second_employee.department + ", designation: " + second_employee.designation + ", salary: " + second_employee.salary , ", raise eligible: " + second_employee.raise_eligible);
console.log("employee 3:\n");
console.log("first name: " + third_employee.first_name + ", department: " + third_employee.department + ", designation: " + third_employee.designation + ", salary: " + third_employee.salary , ", raise eligible: " + third_employee.raise_eligible);