// 33. Ordinal Numbers:
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] == 1) {
        console.log("".concat(numArray, "st"));
    }
    else if (numArray[i] == 2) {
        console.log("".concat(numArray[i], "nd"));
    }
    else if (numArray[i] == 3) {
        console.log("".concat(numArray[i], "rd"));
    }
    else if (numArray[i] >= 4 && numArray[i] <= 9) {
        console.log("".concat(numArray[i], "th"));
    }
    else {
        console.log("Incorrect Number");
    }
}
