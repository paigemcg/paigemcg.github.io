// Problem 1: Create JSON strings for each employee
var samJSON = '{"first_name": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise_eligible": true}';
var maryJSON = '{"first_name": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise_eligible": true}';
var billJSON = '{"first_name": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise_eligible": false}';

var sam = JSON.parse(samJSON);
var mary = JSON.parse(maryJSON);
var bill = JSON.parse(billJSON);

console.log("Problem 1 - Employees:", sam, mary, bill);

// Problem 2: Create JSON string for the company
var companyJSON = '{"companyName": "Tech Stars", "website": "www.techstars.site", "employees": [' + samJSON + ', ' + maryJSON + ', ' + billJSON + ']}';

var company = JSON.parse(companyJSON);

console.log("Problem 2 - Company:", company);

// Problem 3: Add a new employee to the company
var annaJSON = '{"first_name": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise_eligible": false}';
var anna = JSON.parse(annaJSON);

company.employees.push(anna);
console.log("Problem 3 - Adding Anna:", company);

// Problem 4: Calculate total salary for all company employees
var totalSalary = 0;
for (var i = 0; i < company.employees.length; i++) {
    totalSalary += company.employees[i].salary;
}

console.log("Problem 4 - Salary:", totalSalary);

// Problem 5: Give raise to eligible employees and set their eligibility to false
for (var i = 0; i < company.employees.length; i++) {
    if (company.employees[i].raise_eligible) {
        company.employees[i].salary *= 1.1; // Increase salary by 10%
        company.employees[i].raise_eligible = false; // Set raise eligibility to false
    }
}

console.log("Problem 5 - Company after raise:", company);

// Problem 6: Update employees working from home
var employeesWorkingFromHome = ['Anna', 'Sam'];

for (var i = 0; i < company.employees.length; i++) {
    if (employeesWorkingFromHome.includes(company.employees[i].first_name)) {
        company.employees[i].wfh = true;
    } else {
        company.employees[i].wfh = false;
    }
}

console.log("Problem 6 - Company after updating WFH:", company);