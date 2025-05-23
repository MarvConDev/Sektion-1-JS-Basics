// 01 Aufgabe

// Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter 
// übernimmt, sie zusammenfügt zu einem einzigen String und diesen zurückgibt
// (returned).

// Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann


console.log(fullName("Max ", "Mustermann"));

function fullName(name, familyname) {
    let value =(name + familyname)
    
return value


}

// 02 Aufgabe

// Erstelle eine Funktion namens "capitalizeLetters", die einen String als 
// Parameter übernimmt, jeden Buchstaben darin groß schreibt und diesen dann 
// wieder zurückgibt.

// Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE


let capitalizeLetters = "bAnanE"
console.log(capitalizeLetters.toLocaleUpperCase());

// 03 Aufgabe

// Erstelle eine Funktion namens "countCharacters", die einen String als Parameter
//  übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.

// Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6

let countCharacters = "banane";
console.log(countCharacters.length);


// Knacker-Aufgabe

// Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als 
// Parameter übernimmt und diese als Währungswert im Format 0,00€ zurückgibt. 
// Verwende die toFixed() Methode, um zwei Nachkommastellen sicherzustellen und 
// ersetze den Punkt durch ein Komma.

// Beispiel: console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"

let num = 0.5;
let euro = num.toFixed(2);

console.log(euro + "€");
