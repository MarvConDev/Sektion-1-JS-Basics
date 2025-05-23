// let myconditions = !true;  -  false

// let myconditions = true;
// let myconditions = !myconditions;  -  false

myconditions = false || false || true;  // or Operator

myconditions = false && false && true;  //  false  // und Operator 


myConditions = 45 == "45";  // == testet ob exakt gleich, ohne Type
myConditions = 45 === 45; // === testet ob exakt gleich, mit Type  -> true
myConditions = 45 === "45";  // === testet om exakt gleich, mit Type  -> false


myConditions = 45 > 123;  // größer abfrage
myConditions = 45 <= 123;  // größer gleich abfrage

myConditions = 45 !== "47";  // == testet ob exakt gleich, ohne Type
myConditions = 45 !== 47; // === testet ob exakt gleich, mit Type  -> true
myConditions = 45 !== "47";  // === testet om exakt gleich, mit Type  -> true


// console.log(myconditions)



// if(wenn){    //wenn true dann mach dann
// dann
// }

myifCondition = false // oder z.b. 45 > 123

if(myifCondition){
    console.log("hallo world! if teil") //wenn myifCondition = true ist
}else {
    console.log("hallo world! else teil") //wenn myifCondition = false ist dann gebe "else teil aus"
}