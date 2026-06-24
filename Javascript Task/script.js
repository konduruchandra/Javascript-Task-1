// Task-1 - Employee Name 

//Ask the employee for their name using prompt()
let employeeName = prompt("Please enter your name:");
console.log("Employee Name: " + employeeName);

// Print the employee name to the console
console.log("Employee Name: " + employeeName);

//Display "welcome<employeeName>" on the webpage using document.writeln()
document.writeln("Welcome, " + employeeName );


//Task-2 - Company Entry confirmation

//show a confirmation box
let entryConfirmation = confirm("Do you want to enter the company?");
console.log("Entry Confirmation: " + entryConfirmation);

//"are you ready to join todays javascript training?"
let trainingConfirmation = confirm("Are you ready to join today's JavaScript training?");
console.log("Training Confirmation: " + trainingConfirmation);

//Print the user's answer(true/false) in the console
let userAnswer = true;
console.log("User Answer: " + userAnswer);

//Task-3 - Customer Greeting

//show an alert saying:
alert("Welcome to stackly solutions!");

// Then print "customer entered the website" in the console
console.log("Customer entered the website");

//TASK 4 - Student Details

//Ask the student for:
// 1. Name
// 2 . Age
// Print both values in the console

let studentName = "Chandu";
let studentAge = 22;
console.log(studentName, studentAge);

//Task -5 - Product Price

//Create a variable using "let" to store a product price
let productPrize = 340;

// Update the price with a new value
productPrize = 360;

//Print the updated price using console.log()
console.log(productPrize);

//Task-6 - Login Validation

//Ask the user to enter their username.

let username = prompt("Enter your name");

// If the username is empty show a warning using console.warn() otherwsie print "Login Successful:<username>"
if (username === "" || username === null){
    console.warn("warning: username cannot be empty");
}
else{
    console.log(`Login Successful:${username}`);
}

//Task-7 - Website Maintainance
//Display an alert "website is under maintainence"
alert("website is under maintainence");

//After that print an error message in the console using console.error()
console.error("website is under maintainence");

//Task-8 - Feedback Collection

//Ask the user: "How was javascript session?"

let feedback = prompt("How was javascript session?");

//Print the feedback in the console
console.log("user feedback:", feedback);

//Display "Thankyou for your feedback! on the webpage"
document.writeln("Thankyou for your feedback!");

//Task-9 - Profile information

//Ask the user for Name , City, Favourite Programming Language
// Print all three values in the console

const userName = prompt("Enter Your Name");
console.log("Name:" + userName);

const userCity = prompt("Enter your city");
console.log("usercity:" + userCity);

const favProgramlang = prompt("Enter your fav one");
console.log("favprogramminglang:" + favProgramlang);

console.log(userName, userCity, favProgramlang);


//Task-10 - Mini Regristration form
const fullName = prompt("Enter your full name");
console.log("Full Name:" + fullName);

const eMail = prompt("Enter your Mail");
console.log("Email:" + eMail);

const mobNumber = prompt("Enter your Mobile");
console.log("Mobile Number:" + mobNumber);

console.log(fullName, mobNumber, eMail);
alert("Registration Successful !!");