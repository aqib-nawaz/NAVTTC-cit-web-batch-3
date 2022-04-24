//***********======== Callback Hell ========= ***********

//let one = ( callback ) => {
//     setTimeout(() => {
//         console.log("One")
//         callback()
//     }, 5000);

// }

// let two = ( callback ) => {
//     setTimeout(() => {
//         console.log("Two")
//         callback()
//     }, 1000)
// }

// let three = (callback) => {
//     setTimeout(() => {
//         console.log("three")
//         callback()
//     }, 3000)
// }

one(()=>{
    two( () => {
        three(() => {
            console.log("Callback hell done!")
        })
    })
})


//***********======== Using Promise ========= ***********

let one = ( ) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("one")
            resolve()
    
            }, 500);
        })
}

let two = () => {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("two")
        resolve()

        }, 1000);
    })
}

let three = () =>{
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            console.log("three")
            resolve()
    
        }, 300);
    })
}

one().then(
    () => two().then(
        () => three(
            () => {
                console.log("Promise completed")
            }
        )
    )
)


//***********======== Async Await ========= ***********

const run = async () => {
    await one()
    await two()
    await three()
}

run()