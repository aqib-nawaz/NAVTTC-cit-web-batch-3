//Array Destructuring 

// const names = ['Abdus Samad', "Aqib", "Zahid"];

// const [name1,,name2] = names

//console.log(name1);


//Object destructuring

const student = {
    name1: "Abdus Samad",
    age: 23,
    address : {
        city: "Swabi",
        country: "Pak"
    }
}

const {name1, address} = student;

const {city, country} = address;
console.log(name1)
console.log(city)
