let employees = [];

function addEmployee(){

let name = document.getElementById("name").value;
let id = document.getElementById("id").value;
let salary = Number(document.getElementById("salary").value);
let department = document.getElementById("department").value;

 if(name === "" || empId === "" || salary === isNaN || dept === ""){
        alert ("Please fill all the details with ");
        return;
    }

let emp = {
name:name,
id:id,
salary:salary,
department:department
};

employees.push(emp);

alert("Employee Added");

}

function displayEmployees(){

let output = "";

for(let emp of employees){
output += `Name: ${emp.name} | ID: ${emp.id} | Salary: ${emp.salary} | Dept: ${emp.department} <br>`;
}

document.getElementById("output").innerHTML = output;

}

function filterSalary(){

let highSalary = employees.filter(emp => emp.salary > 50000);

let output = "";

for(let emp of highSalary){
output += `Name: ${emp.name} | Salary: ${emp.salary} <br>`;
}

document.getElementById("output").innerHTML = output;

}

function totalSalary(){

let total = employees.reduce((sum, emp) => sum + emp.salary,0);

document.getElementById("output").innerHTML = "Total Salary = ₹" + total;

}

function averageSalary(){

let total = employees.reduce((sum, emp) => sum + emp.salary,0);

let avg = total / employees.length;

document.getElementById("output").innerHTML = "Average Salary = ₹" + avg;

}

function countDepartment(){

let dept = prompt("Enter Department Name");

let count = 0;

for(let emp of employees){
if(emp.department.toLowerCase() === dept.toLowerCase()){
count++;
}
}

document.getElementById("output").innerHTML =
"Employees in "+dept+" department = " + count;

}