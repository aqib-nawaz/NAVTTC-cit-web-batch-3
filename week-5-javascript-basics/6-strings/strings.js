const str1 = "Hello";
const str2 = " World";
const str = "My country is Pakistan."

//concat
let str3 = str1.concat(str2)

    str3 = str1 + str2;

const str4 = `${str1} ${str2}`;

//IndexOf

const l = str.indexOf("test");
console.log(l)

//Replace
const l2 = str.replace("new", "old");
console.log(l2)

//slice
const key = "Pakistan"
const country = str.slice(str.indexOf(key),str.indexOf(key) + key.length)
console.log(country)

//Split
const string = "1 Faizan Laki Marwat 3.5 6th ICP"

const [id, sname, address, gpa, semester, institue] = string.split(",");

//Trim
const s_name = " Faizan   "

const trim = s_name.trim();

// Array
//     forEach
//     map
//     filter
//     reduce
//     indexOf
//     Sort
//     Slice
//     Push/Pop
//     Concat
//     Fill, Some, Every


// Strings
//     trim, slice, concat, substring, split, indexOf, 
//     length, replace, upper, lower