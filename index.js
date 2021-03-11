/*Question Number One
Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed*/

function maxOfTwoNumbers(x, y) {
if(x > y) {
    return x
} else {
    return y
}
};

console.log("Function One: ", maxOfTwoNumbers(77, 9));

/*Question Number Two
Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.*/

const maxOfThree = function(x, y, z) {
if(x > y && x > z) {
    return x
} if(y > x && y > z) {
    return y
} else {
    return z
}
};

console.log("Function Two: ", maxOfThree(1, 5, 3));


/*Question Number Three
Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.*/

function isCharAVowel(x){
if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u" ){
    return true
} else {
    return false
}
};
//there has to be a simpler way to do this?
console.log("Functon Three: ", isCharAVowel("n"));


/*Question Number Four
Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.*/

let sumArray = function (arr){
let sum = 0;
arr.forEach(function(num) {
    sum+=num
})
return sum
};
console.log ("Function Four: ", sumArray([2,4,5]));


/*Question Number Five
Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.*/

function multiplyArray(arr) {
let product = 1;

for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
}
return product;
}

console.log("Function Five: ", multiplyArray([2, 1, 2]))


/*Question Number Six
Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.*/

let numArgs = function() {
return arguments.length;
}
console.log("Function Six: " , numArgs(1, "pants", 4, "the", true));


/*Question Number Seven
Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".*/

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
    // for string, start at -1 of length of string, decrease by 1 each time, end when hit zero index
        newString += str[i];
    }
    return newString;
}

console.log("Function Seven: ", reverseString("Butterfly"));

/*Question Number Eight
Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.*/


//had to look at answer key for this one - comments are my understanding of it
const longestStringInArray = function(arr) {
let longest = 0;

arr.forEach(function(s) { //loops through array
    if (s.length > longest) longest = s.length;//index0, checks length, logs as longest. Loops through index1, is longer than index 0? If yes, replaces length, if no, moves to index 3.
});
return longest; //after going through entire loop, returns longest
};

console.log("Function Eight ", longestStringInArray(['Help', 'JavaScript', 'is', 'destroying', 'my', 'brain']));

/*Question Number Nine
Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].*/


//had to use answer key to get this one as well - comments are my understanding of it
function stringsLongerThan(arr, len) {
const strings = [];

arr.forEach(function(s) { //loops through all strings in array
    if (s.length > len) strings.push(s); //if length of string is greater than argument number, push to string array
});
return strings;
};

console.log("Function Nine: ", stringsLongerThan(['yesterday', 'eight', 'days', 'a', 'week'], 3));