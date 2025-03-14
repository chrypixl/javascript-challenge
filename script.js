// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employees = [];
const employee = {
  firstName: "First Name",
  lastName: "Last Name",
  salary: ""
};

addEmployeesBtn.addEventListener("click", collectEmployees);
// Collect employee data
function collectEmployees() {

  while (true) {
    let firstName = prompt("First name (or type 'exit' to finish):");
    if (firstName.toLowerCase() === 'exit') {
      break;
    }

    let lastName = prompt("Last name:");
    let salaryInput = prompt("Employee's salary:");
    let salary = isNaN(parseInt(salaryInput)) ? 0 : parseInt(salaryInput);

    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employees.push(employee);
  }

  return employees;
}



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  const sum = employeesArray.reduce((total, employee) => total + employee.salary, 0);
  const average = sum / employeesArray.length;
  let averageSalary = isNaN(parseInt(average)) ? 0 : parseInt(average);

  console.log(`The average salary among our ${employeesArray.length} employees is $${averageSalary}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
function displayEmployees(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);
//console.table(employees) is undefined.
  displayAverageSalary(employees);

  console.log('==============================');
  

  getRandomEmployee(employees);
//Cannot read properties of undefined (reading 'sort') at htmlButtonElement.trackEmployeeData;
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button;
addEmployeesBtn.addEventListener('click', trackEmployeeData);
