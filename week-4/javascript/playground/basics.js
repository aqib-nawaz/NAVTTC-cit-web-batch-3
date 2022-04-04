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

(marks > 30) ? console.log("Pass") : console.log("Fail");
