function checkGrade(grade) {
    if (grade >= 1 && grade <= 4) {
        console.log("Passed");
    } else if (grade >= 5 && grade <= 6) {
        console.log("Failed");
    } else {
        console.log("Invalid grade");
    }
}


function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}


function checkBigger(num1, num2) {
    if (num1 > num2) {
        console.log("Bigger number:", num1);
    } else if (num2 > num1) {
        console.log("Bigger number:", num2);
    } else {
        console.log("Both numbers are equal");
    }
}


function checkStringLength(text) {
    if (text.length > 5) {
        console.log("Text has more than 5 characters");
    } else {
        console.log("Text has 5 or fewer characters");
    }
}


checkGrade(3);
checkNumber(-2);
checkBigger(1, 4);
checkStringLength("hello!");