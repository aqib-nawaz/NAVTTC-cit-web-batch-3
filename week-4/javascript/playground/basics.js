// If els condition
const marks = 20;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else if (marks >= 50) {
  // else if is optional
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else if (marks >= 30) {
  console.log("D");
} else {
 console.log("F");
}

//Template literals

(marks > 30) ? console.log("Pass") : console.log("You are Fail");

// switch case  
switch (marks) {
    case 10:
        console.log("Equal to 10")
        break;
    case 20:
        console.log("Equal to 20")
        break;
    case 30:
        console.log("Equal to 30")
        break;

    default:
        console.log("Not equal to 10, 20, 30");
}



