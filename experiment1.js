function calculateResult(){

let subjects = Number(document.getElementById("subjects").value);

let total = 0;

for(let i = 1; i <= subjects; i++){

let marks = Number(prompt("Enter marks for subject " + i));

total += marks;

}

let average = total / subjects;

let grade;
let result;

if(average >= 90){
grade = "A";
}
else if(average >= 75){
grade = "B";
}
else if(average >= 60){
grade = "C";
}
else if(average >= 50){
grade = "D";
}
else{
grade = "F";
}

if(average >= 40){
result = "PASS";
}
else{
result = "FAIL";
}

document.getElementById("output").innerHTML =
`Total Marks: ${total} <br>
Average Marks: ${average.toFixed(2)} <br>
Grade: ${grade} <br>
Result: ${result}`;

}
