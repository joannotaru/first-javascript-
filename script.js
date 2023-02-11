
function addTwoNums(){
    var num1 = parseInt(prompt("Enter a number"));
    var num2 = parseInt(prompt("Enter another number"));
    return num1 + num2;
   
}
alert(addTwoNums());






// Queston 2

var firstName = prompt("Enter your first name");
var lastName = prompt("enter your last name");
var fname = firstName.slice(0,4);
var lname = lastName.slice(0,1);
var add = fname + lname;
var username = add.toLowerCase();
msg = "Your username is ";
output = msg + username;
alert(output);


