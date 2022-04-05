var data = {
    products: [
      {
        name: "Laptop",
        price: 1000,
        isAvailable: true,
      },
      {
        name: "Mobile",
        price: 500,
        isAvailable: false,
      },
      {
        name: "TV",
        price: 2000,
        isAvailable: false,
      },
      {
        name: "Fridge",
        price: 3000,
        isAvailable: true,
      },
    ]
  };
  


// Challenge--1  
// Calculate Total Price

let totalPrice = 0;
let discountPrice;
for(let i = 0; i < data.products.length; i++){
    totalPrice += data.products[i].price
}

console.log(totalPrice);

// Challage 2 
// Calculate 20% discount of All Available product 

for(let i = 0; i < data.products.length; i++){
  if(data.products[i].isAvailable){

    console.log(data.products[i].name+ " " + "Price : " + data.products[i].price)
    data.products[i].price -= (data.products[i].price*20) /100;
    console.log(data.products[i].name+" Discount Price : " + data.products[i].price)
  }
}