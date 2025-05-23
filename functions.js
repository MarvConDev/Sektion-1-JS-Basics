// let discount = 50;
// let price = 500;

// console.log((price - discount) * 1.19);

// price = 400;

// calculatePrice();

// price = 1200;

// calculatePrice();


// function calculatePrice() {
//     console.log((price - discount) * 1.19);
// }

// __________________________________________________________funktion Parameter_________________________________________________________________________
// calculatePrice(50, 500); //() <- Parameter (art platzhalter)


// calculatePrice(50, 400);


// function calculatePrice(discount, price) {
//     console.log((price - discount) * 1.19);
// }

// _______________________________________________________funktion return________________________________________________________

console.log(logPrice(50, 300));

function logPrice(discount, price) {
    let value = (price - discount - discount) * 1.19;

    console.log("vor return");
    
    return value
      console.log("nach return");  // nach return keine weitere ausgabe
}