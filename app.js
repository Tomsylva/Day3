function sayHi(){
    console.log("Hi");
    return "Hello there";
}

console.log(sayHi());

function age(birthYear){
    console.log(2021 - birthYear);
    return 2021 - birthYear;
}

const myAge = age(1992);
console.log("My age:", myAge);
const filipeAge = age(1996);
console.log("Filipe is:", filipeAge);

//conditionals and functions

function canDrink(age) {
    if (typeof age !== "number"){ //defensive programming - removing possibility of errors
        return;
    } else if (age >= 18){
        console.log("Theoritically, you can drink")
    } else if (age === 17){
        console.log("Maybe if you're lucky")
    } else {
        console.log("Computer says no")
    }
};

canDrink(24);
canDrink(12);

function haveYouMet(wingman, person){
    console.log(`Hello ${wingman}, have you met ${person}.`)
}

haveYouMet("Hugo", "Ola");
haveYouMet("Tom", "Annie");

console.clear();
console.error("Oh no!");
console.warn("Look behind you!");
console.clear();

const log = console.log;
log("I am the king of this here castle");

console.clear();

const shoppingList = [
    "milk",
    "eggs",
    "wataaa",
    "weapons"
];

log(shoppingList);
shoppingList[0] = "almond milk"; //changes item
log(shoppingList); 
shoppingList.push("cheese"); //adds to end
log(shoppingList);
shoppingList.pop(); // removes from end
log(shoppingList);
shoppingList.unshift("cheese"); // adds to start
log(shoppingList);
shoppingList.shift(); // removes from start 
log(shoppingList);

console.clear();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//splice

// initial index, number of deleted items, (items to add (optional))
// arr.splice(0, 0, 0); // at index 0 delete nothing and add 0;
// log(arr);
// arr.splice(3, 4); // at index 3 remove 4 items and add nothing
// log(arr);

// slice

// const newArr = arr.slice(5); // makes a new array by copying the old array and starting at index 5
// log(newArr);

// iterating over an array and adding math

for (let i = 0; i < arr.length; i++){
    console.log("The double is: ", arr[i] * 2);
}

log(arr);

// for of loop example - usually easier

for (let number of arr){
    console.log(`The ${number} is inside the array`);
}

// array methods - forEach with call back function.
// takes an array and starts a for loop internally

let sumOfCart = 0;

arr.forEach(function (element) {
    sumOfCart += element;
});

log(`You have to pay ${sumOfCart} to get these items`);

console.clear();

// forEach can replace a for loop or a for of loop as an array method