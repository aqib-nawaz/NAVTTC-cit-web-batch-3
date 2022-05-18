const fs = require('fs')
let obj = {
    id : "1",
    name : "Jawad Anwar"
}


fs.read('./data.txt', 'utf8', (err, data) => {
    console.log(data);
})

// fs.writeFile('./data.txt', "Hello World", (error, data) =>{
//     if (error) return;
//     console.log('filed saved')
// })