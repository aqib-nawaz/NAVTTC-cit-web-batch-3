// If els condition
// const marks = 20;

// if (marks >= 80) {
//   console.log("A+");
// } else if (marks >= 70) {
//   console.log("A");
// } else if (marks >= 60) {
//   console.log("A-");
// } else if (marks >= 50) {
//   // else if is optional
//   console.log("B");
// } else if (marks >= 40) {
//   console.log("C");
// } else if (marks >= 30) {
//   console.log("D");
// } else {
//  console.log("F");
// }

// //Template literals

// (marks > 30) ? console.log("Pass") : console.log("You are Fail");

// // switch case
// switch (marks) {
//     case 10:
//         console.log("Equal to 10")
//         break;
//     case 20:
//         console.log("Equal to 20")
//         break;
//     case 30:
//         console.log("Equal to 30")
//         break;

//     default:
//         console.log("Not equal to 10, 20, 30");
// }

// var data = {
//   marks: 45,
//   name : "Abdus Samad",
//   gpa: 3.7,
//   isPass: true,
//   friends : ["Aqib", "Hayat"],
//   address:{
//     city: "Mardan",
//     countary: "Pakistan"
//   }

// }

// Challenges 1

// if isPass is true display all friends
// if(data.isPass){
//   console.log(data.friends)
// }

// Challenges 2
// if isPass is true, gpa > 3.5, and city  = Mardan display "You are eligible for scholarship"
// if((data.isPass) && (data.gpa > 3.5) && (data.address.city == "Mardan") ){
//   console.log("YOu are eligible for scholarship");
// }

// var studData = [
//   {
//     marks: 45,
//     name : "Abdus Samad",
//     gpa: 3.7,
//     isPass: true,
//     friends : ["Aqib", "Hayat"],
//     address:{
//       city: "DIK",
//       countary: "Pakistan"
//     }
//   },
//   {
//       marks: 45,
//       name : "Abdus Samad",
//       gpa: 3.7,
//       isPass: false,
//       friends : ["Aqib", "Hayat"],
//       address:{
//         city: "Mardan",
//         countary: "Pakistan"
//       }

//   },
//   {
//     marks: 45,
//     name : "Abdus Samad",
//     gpa: 3.7,
//     isPass: true,
//     friends : ["Aqib", "Hayat"],
//     address:{
//       city: "Mardan",
//       country: "Pakistan"
//     }
//   }

// ]
// // Challenge 3

// Display  cities of all the students who are passed
// for (let i = 0; i< studData.length; i++){

//   if(studData[i].isPass){
//     console.log(studData[i].address.city)
//   }
// }

const obj = {
        name: 'Abdus Samad',
        age: 23,
        isPass: true,
        friends: ['Abdus Samad', 'Abdul Qadir', 'Abdul Samad'],
        address: {
            city: 'Mardan',
        }
    }

    console.log(Object.keys(obj));
    
    for(let key in obj){
        console.log(key);
    }