// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {
let employeesArray = [];
let addEmployee = true;
while (addEmployee) {
  let firstName = window.prompt('Enter employee first name:');
  let lastName = window.prompt('Enter employee last name:');
  let salaryInput = window.prompt('Enter employee salary:');
  let salary = Number(salaryInput);
    if (isNaN(salary)) {
      window.alert('Please enter a valid number for the salary.');
    }

  let employeeObject = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };

  //console.log(employeesArray);
  employeesArray.push(employeeObject);
  addEmployee = window.confirm('Would you like to add another employee?');
  }
  return employeesArray;

}

// Display the average salary
// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
 if (employeesArray.length === 0) {
   console.log('There are no employees to calculate the average salary.');
   return;
 }
 let totalSalary = 0;
 for (let i = 0; i < employeesArray.length; i++) {
   totalSalary += employeesArray[i].salary;
 }

let averageSalary = totalSalary / employeesArray.length;
console.log(`The average salary between our ${employeesArray.length} employee(s) is $${averageSalary.toFixed(2)}.`);
}

// Select a random employee
// TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
 if (employeesArray.length === 0) {
   console.log('There are no employees to select a random employee.');
   return;
 }
let randomIndex = Math.floor(Math.random() * employeesArray.length);
let getRandomEmployee = employeesArray[randomIndex];
console.log(`Congratulations! The lucky employee is ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`);
}

/*
====================
STARTER CODE
Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
// Get the employee table
const employeeTable = document.querySelector('#employee-table');

// Clear the employee table
employeeTable.innerHTML = '';

// Loop through the employee data and create a row for each employee
for (let i = 0; i < employeesArray.length; i++) {
  const currentEmployee = employeesArray[i];

  const newTableRow = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = currentEmployee.firstName;
  newTableRow.append(firstNameCell);

  const lastNameCell = document.createElement("td");
  lastNameCell.textContent = currentEmployee.lastName;
  newTableRow.append(lastNameCell);

  const salaryCell = document.createElement("td");
  // Format the salary as currency
  salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  });

  newTableRow.append(salaryCell);

  employeeTable.append(newTableRow);
}
}

const trackEmployeeData = function() {
const employees = collectEmployees();

console.table(employees);

displayAverageSalary(employees);

console.log('==============================');

getRandomEmployee(employees);

employees.sort(function(a,b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
});

displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

