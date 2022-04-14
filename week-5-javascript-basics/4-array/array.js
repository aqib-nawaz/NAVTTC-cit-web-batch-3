const marks = [23, 45,67, 89,79];

//For each method
marks.forEach(function (n){
    console.log("for Each : " + n)
})

//using arrow function
marks.forEach(n => console.log("for Each arrow fun : " + n));


//Map method
   const square = marks.map((n) => n * n ); ////In filter values cannot be changed
    console.log("Map Method : " + square)

//Filter

const fail = marks.filter((n) => n < 30 ) //In filter values cannot be changed
console.log("Filter method : " + fail);

//Reduce
const sum = marks.reduce(((a, b) => a + b), 0)
console.log("Reduce Method : " + sum);

//Sorting

const list = [0,9, 1, 7, 8]
const sortedArr = list.sort();
console.log("Sorting of single char arr : " + sortedArr)

const list2 = [2, 20, 9, 80];

const sortedArr2 = list2.sort((a, b) => a - b); //use tim sort

console.log("Sorting of two-char arr : "+ sortedArr2)

//Chaining


const marksList = [90, 87, 45, 40, 55, 30, 32, 22];

const sumArr = marksList
.sort((a, b) => a - b)
.filter((n) => n > 50)
.map((n) => n + 10)
.reduce((a, b) => a + b, 0);

//console.log("Chaining : " + sumArr)

//IndexOf Method
const l = marksList.indexOf(90);

//If array is passed to a function it is passed by references no by values
//Therefor it values is mutated


//Concat

let newMarks = [70,55].concat(marksList);
console.log(newMarks)

//fill

let full = newMarks.fill(10,0,10)


